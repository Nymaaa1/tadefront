import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from "../../../api/appContext";
import Loader from "../../../widget/Spinner";
import { Link, useLocation } from "react-router-dom";
import CreateOrder from "./CreateOrder";
import { ToastContainer, toast } from "react-toastify";
import UploadPhoto from "./UploadPhoto";
import "react-toastify/dist/ReactToastify.css";
import "./Order.scss";
import Message from "../../../widget/Message";

const Order = () => {
  const location = useLocation();
  const {
    user,
    getOrder,
    isLoading,
    order,
    editOrder,
    pageInfo,
    showAlert,
    clearAllAlert,
  } = useAppContext();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupPhoto, setShowPopupPhoto] = useState(false);
  const id = location.state ? location.state.id : null;
  const sCode = location.state ? location.state.sCode : null;
  const cCode = location.state ? location.state.cCode : null;
  const [data, setData] = useState([]);
  const [pageInfos, setPageInfos] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [oCode, setoCode] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const fetchData = () => {
    clearAllAlert();
    getOrder({ id, sCode, cCode, page: currentPage });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if (!isLoading && order) {
      setData(order.map((row) => ({ ...row, isEdited: false })));
      setPageInfos(pageInfo);
    }
  }, [isLoading, order, pageInfo]);

  const handleLoginClick = () => {
    setShowPopup(true);
  };

  const hadndlerOcode = (oCode, imageUrl) => {
    setoCode(oCode);
    setImageUrl(imageUrl);
  };

  const handleCloseLoginPopup = async () => {
    fetchData();
    if (!isLoading && order) {
      setData(order.map((row) => ({ ...row, isEdited: false })));
    }
    setShowPopup(false);
  };

  const handleUpload = () => {
    setShowPopupPhoto(false);
  };

  const onHandleUpload = (oCode, imageUrl) => {
    hadndlerOcode(oCode, imageUrl);
    setShowPopupPhoto(true);
  };

  const handleEdit = (oCode, field, value) => {
    let newData;
    if (field === "wayCount" || field === "price" || field === "dollar") {
      newData = data.map((item) => {
        if (item.oCode === oCode) {
          let updatedItem = { ...item, [field]: value, isEdited: true };
          if (field === "wayCount" || field === "price" || field === "dollar") {
            updatedItem.allPrice =
              (updatedItem.wayCount || 0) * (updatedItem.price || 0);
            if (updatedItem.dollar === 0) {
              updatedItem.allDollar = 0;
            } else {
              updatedItem.allDollar =
                (updatedItem.wayCount || 0) *
                ((updatedItem.price || 0) / (updatedItem.dollar || 0));
            }
          }
          return updatedItem;
        }
        return item;
      });
    } else {
      newData = data.map((item) => {
        if (item.oCode === oCode) {
          const now = new Date();
          const itemOrderDate = new Date(item.orderDate);
          itemOrderDate.setDate(itemOrderDate.getDate() + 7);
          if (itemOrderDate > now) {
            return { ...item, [field]: value, isEdited: true };
          } else {
            showToastMessage("Захиалга засах өдөр дууссан", "warning");
          }
        }
        return item;
      });
    }
    setData(newData);
  };

  const onChangeOrderData = async () => {
    const editedData = data.filter((item) => item.isEdited);
    if (editedData.length > 0) {
      await editOrder(editedData);
      fetchData();
      if (!isLoading && order) {
        setData(order.map((row) => ({ ...row, isEdited: false })));
      }
    } else {
      showToastMessage("Захиалга засагдаагүй байна", "warning");
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const showToastMessage = (message, type) => {
    if (type === "error") {
      toast.error(message);
    } else if (type === "success") {
      toast.success(message);
    } else if (type === "warning") {
      toast.warning(message);
    }
  };

  return (
    <>
      {showAlert && <Message />}
      <ToastContainer />
      {isLoading ? (
        <div className="loading">
          <Loader isLoading={isLoading} />
        </div>
      ) : (
        <div className="popup">
          {showPopupPhoto && (
            <UploadPhoto
              onClose={handleUpload}
              state={{
                navid: id,
                navsCode: sCode,
                navcCode: cCode,
                navoCode: oCode,
                imageUrl: imageUrl,
              }}
            />
          )}
          {!showPopupPhoto && (
            <div className="a">
              {showPopup && (
                <CreateOrder
                  onClose={handleCloseLoginPopup}
                  state={{ navid: id, navsCode: sCode, navcCode: cCode }}
                />
              )}

              {!showPopup && (
                <div className="mains">
                  <div className="order-container">
                    <h2 className="head-text">
                      <span>Захиалга</span>
                    </h2>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Д/Д</th>
                            <th>Нэр</th>
                            <th>Хэмжих нэгж</th>
                            <th>Тоо хэмжээ</th>
                            <th>Боломжит хэмжээ</th>
                            <th>Нэгж үнэ(₮)</th>
                            <th>Нийт үнэ(₮)</th>
                            <th>Ханш(₮)</th>
                            <th>Нийт үнэ($)</th>
                            <th>Захиалгын өдөр</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row) => (
                            <tr
                              key={row.oCode}
                              className={
                                row.type === 0
                                  ? "green-row"
                                  : row.type === 1
                                  ? "yellow-row"
                                  : "white-row"
                              }
                            >
                              <td
                                onClick={(e) =>
                                  onHandleUpload(row.oCode, row.imageUrl)
                                }
                              >
                                <div className="input-fields">
                                  {row.oCode.toLocaleString()}
                                </div>
                              </td>
                              <td>
                                {user.role === "ADMIN" ||
                                user.role === "WORKER" ? (
                                  <input
                                    className="input-field"
                                    type="text"
                                    value={row.name}
                                    onChange={(e) =>
                                      handleEdit(
                                        row.oCode,
                                        "name",
                                        e.target.value
                                      )
                                    }
                                  />
                                ) : (
                                  <div className="input-field">{row.name}</div>
                                )}
                              </td>
                              <td>
                                {user.role === "ADMIN" ||
                                user.role === "WORKER" ? (
                                  <input
                                    className="input-field"
                                    type="text"
                                    value={row.size}
                                    onChange={(e) =>
                                      handleEdit(
                                        row.oCode,
                                        "size",
                                        e.target.value
                                      )
                                    }
                                  />
                                ) : (
                                  <div className="input-field">{row.size}</div>
                                )}
                              </td>
                              <td>
                                {user.role === "ADMIN" ||
                                user.role === "WORKER" ? (
                                  <input
                                    className="input-field"
                                    type="number"
                                    value={row.count}
                                    onChange={(e) =>
                                      handleEdit(
                                        row.oCode,
                                        "count",
                                        parseInt(e.target.value)
                                      )
                                    }
                                  />
                                ) : (
                                  <div className="input-field">
                                    {row.count.toLocaleString()}
                                  </div>
                                )}
                              </td>
                              <td>
                                {user.role === "ADMIN" ||
                                user.role === "MANAGER" ? (
                                  <input
                                    className="input-field"
                                    type="number"
                                    value={row.wayCount}
                                    onChange={(e) =>
                                      handleEdit(
                                        row.oCode,
                                        "wayCount",
                                        parseInt(e.target.value)
                                      )
                                    }
                                  />
                                ) : (
                                  <div className="input-field">
                                    {(row.wayCount ?? 0).toLocaleString()}
                                  </div>
                                )}
                              </td>
                              <td>
                                {user.role === "ADMIN" ||
                                user.role === "MANAGER" ? (
                                  <input
                                    className="input-field"
                                    type="number"
                                    value={row.price}
                                    onChange={(e) =>
                                      handleEdit(
                                        row.oCode,
                                        "price",
                                        parseFloat(e.target.value)
                                      )
                                    }
                                  />
                                ) : (
                                  <div className="input-field">
                                    {row.price.toLocaleString()}
                                  </div>
                                )}
                              </td>
                              <td>
                                <div className="input-field">
                                  {row.allPrice.toLocaleString()}
                                </div>
                              </td>
                              <td>
                                {user.role === "ADMIN" ||
                                user.role === "MANAGER" ? (
                                  <input
                                    className="input-field"
                                    type="number"
                                    value={row.dollar}
                                    onChange={(e) =>
                                      handleEdit(
                                        row.oCode,
                                        "dollar",
                                        parseFloat(e.target.value)
                                      )
                                    }
                                  />
                                ) : (
                                  <div className="input-field">
                                    {row.dollar.toLocaleString()}
                                  </div>
                                )}
                              </td>
                              <td>
                                <div className="input-field">
                                  {row.allDollar.toLocaleString()}
                                </div>
                              </td>
                              {user.role === "ADMIN" ||
                              user.role === "WORKER" ? (
                                <DatePicker
                                  selected={row.orderDate}
                                  onChange={(date) =>
                                    handleEdit(row.oCode, "orderDate", date)
                                  }
                                  dateFormat="yyyy-MM-dd"
                                />
                              ) : (
                                <div className="input-field">
                                  {row.orderDate}
                                </div>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {pageInfos && (
                        <div className="pagination">
                          {Array.from(
                            { length: pageInfos.totalPages },
                            (_, i) => (
                              <button
                                key={i}
                                onClick={() => goToPage(i + 1)}
                                className={
                                  currentPage === i + 1 ? "active" : ""
                                }
                              >
                                {i + 1}
                              </button>
                            )
                          )}
                        </div>
                      )}
                      <Link to={"/dashboard/excel"}>
                        <button className="fab3">Excel</button>
                      </Link>
                      <button className="fab2" onClick={onChangeOrderData}>
                        Хадгалах
                      </button>
                      <button className="fab1" onClick={handleLoginClick}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Order;
