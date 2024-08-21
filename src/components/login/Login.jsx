import { useEffect, useState } from "react";
import "./Login.scss";
import { GoX } from "react-icons/go";
import { images } from "../main/constants";
import { useAppContext } from "../../api/appContext";
import Loader from "../../widget/Spinner";
import Message from "../../widget/Message";

const initialState = {
  email: "",
  password: "",
};

const LoginPopup = ({ onClose }) => {
  const [values, setValues] = useState(initialState);
  const {
    user,
    loginUser,
    isLoading,
    showAlert,
    clearAllAlert,
  } = useAppContext();
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    const currentUser = { email, password };
    clearAllAlert();
    loginUser(currentUser);
  };

  useEffect(() => {
    const navigateToDashboard = async () => {
      if (user) {
        onClose();
        window.location.href = "/dashboard";
      }
    };
    navigateToDashboard();
  }, [user, onClose]);

  return (
    <div className="login-popup-container">
      {showAlert && <Message />}
      <div className="login-popup-content">
        {isLoading ? (
          <div className="loading">
            <Loader isLoading={isLoading} />
          </div>
        ) : (
          <>
            <div className="app__navbar-logo">
              <img src={images.mainLogo} alt="logo" />
            </div>
            <form onSubmit={onSubmit}>
              <label>
                Емэйл:
                <input
                  type="email"
                  name="email"
                  placeholder="@tade.mn"
                  value={values.email}
                  onChange={onHandleChange}
                />
              </label>
              <label>
                Нууц үг:
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={onHandleChange}
                />
              </label>
              <div className="padd"></div>
              <button type="submit">Нэвтрэх</button>
            </form>
            <div className="close" onClick={handleLoginFormSubmit}>
              <GoX size={30} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
