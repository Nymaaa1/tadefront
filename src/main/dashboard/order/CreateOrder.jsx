import { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { useAppContext } from "../../../api/appContext";
import Loader from "../../../widget/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateOrder.scss";

const CreateOrder = ({ onClose, state }) => {
  const {
    user,
    createOrder,
    isLoading,
  } = useAppContext();
  const [newRowData, setNewRowData] = useState([]);
  const { navid, navsCode, navcCode } = state;

  useEffect(() => {
    const fetchData = () => {
      const tempId = newRowData.length + 1;
      if (newRowData.length !== 1) {
        setNewRowData([
          ...newRowData,
          {
            id: tempId,
            name: "",
            size: "",
            count: 0,
            wayCount: 0,
            price: 0,
            allPrice: 0,
            dollar: 0,
            allDollar: 0,
            orderDate: new Date(),
            orderNew: 1,
          },
        ]);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (oCode, field, value) => {
    const newData = newRowData.map((item) => {
      if (item.oCode === oCode) {
        return { ...item, [field]: value, isEdited: true };
      }
      return item;
    });
    setNewRowData(newData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, size, count } = newRowData[0];
    if (!name || !size || !count) {
      showToastMessage("Утга бүрэн оруулна уу!", "warning");
      return;
    }

    const orderData = {
      name: newRowData[0].name,
      size: newRowData[0].size,
      count: newRowData[0].count,
      wayCount: newRowData[0].wayCount,
      price: newRowData[0].price,
      allPrice: newRowData[0].allPrice,
      dollar: newRowData[0].dollar,
      allDollar: newRowData[0].allDollar,
      orderDate: newRowData[0].orderDate.toISOString().split("T")[0],
      type: 0,
      id: navid,
      sCode: navsCode,
      cCode: navcCode,
      imageUrl: null,
    };
    createOrder(orderData);
    onClose();
  };

  const showToastMessage = (message, type) => {
    if (type === "error") {
      toast.error(message);
    } else if (type === "success") {
      toast.success(message);
    } else {
      toast.warning(message);
    }
  };

  return (
    <>
      <div className="create-order">
        <div className="create-order-content">
          {isLoading ? (
            <div className="loading">
              <Loader isLoading={isLoading} />
            </div>
          ) : (
            <>
              <ToastContainer />
              <form onSubmit={onSubmit}>
                <div className="main">
                  <div className="order-containers">
                    <div className="table-containers">
                      <table>
                        <thead>
                          <tr>
                            <th>Д/Д</th>
                            <th>Нэр</th>
                            <th>Хэмжих нэгж</th>
                            <th>Тоо хэмжээ</th>
                            <th>Боломжит хэмжээ</th>
                            <th>Нэгж үнэ</th>
                            <th>Нийт үнэ(₮)</th>
                            <th>Ханш</th>
                            <th>Нийт үнэ($)</th>
                            <th>Захиалгын өдөр</th>
                          </tr>
                        </thead>
                        <tbody>
                          {newRowData.map((row) => (
                            <tr key={row.oCode}>
                              <td>{row.id}</td>
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
                                  row.name
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
                                  row.size
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
                                  row.count
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
                                  row.wayCount
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
                                  row.price
                                )}
                              </td>
                              <td>{row.allPrice}</td>
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
                                  row.dollar
                                )}
                              </td>
                              <td>{row.allDollar}</td>
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
                                row.orderDate
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <button type="submit">Захиалга нэмэх</button>
              </form>
              <div className="close" onClick={onClose}>
                <GoX size={30} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateOrder;
