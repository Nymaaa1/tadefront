import { useState } from "react";
import { useAppContext } from "../../../api/appContext";
import Loader from "../../../widget/Spinner";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateBuilding.scss";
import { useLocation, useNavigate } from "react-router-dom";
import "./CreateBuilding.scss";

const initialState = {
  name: "",
};

const CreateBuilding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createBuilding, isLoading } = useAppContext();
  const id = location.state ? location.state.navid : null;
  const sCode = location.state ? location.state.navsCode : null;

  const [values, setValues] = useState(initialState);

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!values.name.trim()) {
      showToastMessage("Нэр оруулна уу!", "warning");
      return;
    } else {
      const buildingData = {
        name: values.name,
        type: 0,
        id: id,
        sCode: sCode,
      };
      await createBuilding(buildingData);
      if (!isLoading) {
        showToastMessage("Барилга амжилттай үүслээ.", "success");
        navigate("/dashboard");
      }
    }
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
      <ToastContainer />
      <div className="create-building">
        <div className="create-building-content">
          {isLoading ? (
            <div className="loading">
              <Loader isLoading={isLoading} />
            </div>
          ) : (
            <>
              <form onSubmit={onSubmit}>
                <label>
                  Нэр:
                  <input
                    type="text"
                    name="name"
                    placeholder="Block101"
                    value={values.name}
                    onChange={onHandleChange}
                  />
                </label>
                <div className="padd"></div>
                <button type="submit">Хадгалах</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateBuilding;
