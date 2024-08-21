import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Building.scss";
import { images } from "../../../components/main/constants";
import { useAppContext } from "../../../api/appContext";
import Loader from "../../../widget/Spinner";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Building = () => {
  const { logoutUser, user } = useAppContext();
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const sCode = location.state ? location.state.sCode : null;
  const {
    getContruction,
    isLoading,
    contruction,
    responseMessage,
    responseStatus,
    showAlert,
    clearAllAlert,
  } = useAppContext();

  useEffect(() => {
    const fetchData = () => {
      clearAllAlert();
      getContruction(id, sCode);
    };
    showAlert && showToastMessage(responseMessage, responseStatus);
    fetchData();
  }, [showAlert]);

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
      <ToastContainer />
      {isLoading ? (
        <div className="loading">
          <Loader isLoading={isLoading} />
        </div>
      ) : (
        <div className="app__profiless">
          {contruction.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-items"
              key={about.name + index}
            >
              <NavLink
                to={"/dashboard/order"}
                state={{ id: id, sCode: sCode, cCode: about.cCode }}
              >
                <img src={id == 1 ? images.huhsuvd9 : images.apartm8} />
              </NavLink>
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.name}
              </h2>
            </motion.div>
          ))}
          {/* {user.role === "ADMIN" || user.role === "MANAGER" ? */}
          <NavLink
            to={"/dashboard/createBuilding"}
            state={{ navid: id, navsCode: sCode }}
          >
            <button className="fab4">+</button>
          </NavLink>
          {/* : null
          } */}
        </div>
      )}
    </>
  );
};

export default Building;
