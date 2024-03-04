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
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const sCode = location.state ? location.state.sCode : null;
  const {
    getContruction,
    isLoading,
    contruction,
    message,
    alertMessage,
  } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      await getContruction(id, sCode);
    };
    if (!isLoading) {
        showToastMessage(message, alertMessage);
      }
    fetchData();
  }, []);

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
                <img src={images.about} />
              </NavLink>
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.name}
              </h2>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default Building;
