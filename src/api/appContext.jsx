import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  CONTRUCTION_BEGIN,
  CONTRUCTION_ERROR,
  CONTRUCTION_SUCCESS,
  GET_ORDER_SUCCESS,
  GET_ORDER_BEGIN,
  GET_ORDER_ERROR,
  CREATE_ORDER_BEGIN,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  EDIT_ORDER_BEGIN,
  EDIT_ORDER_SUCCESS,
  EDIT_ORDER_ERROR,
  CONTRUCTION_CREATE_BEGIN,
  CONTRUCTION_CREATE_SUCCESS,
  CONTRUCTION_CREATE_ERROR,
  CLEAR_ALL_ALERT,
} from "./actions";
import reducer from "./reducer";

// ----------Local Storage------------- //
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? user : null,
  token: token,
  page: 1,
  message: "",
  alertMessage: "",
  contruction: [],
  order: [],
  // baseURL: "https://tade.mn:443",
  baseURL: "http://localhost:4000",
  pageInfo: {},
  responseMessage: "",
  responseStatus: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //----------configure-axios----------------------//
  // const httpsAgent = new https.Agent({
  //   rejectUnauthorized: false,
  //   requestCert: false,
  //   agent: false,
  // });

  // const authFetch = axios.create({
  //   baseURL: "http://tade.mn:443",
  //   responseType: "json",
  //   withCredentials: true,
  //   // httpsAgent: new https.Agent({
  //   //   rejectUnauthorized: false,
  //   // }),
  // });

  // request Interceptors: https://axios-http.com/docs/interceptors
  // authFetch.interceptors.request.use(
  //   (config) => {
  //     config.headers.common["Authorization"] = `Bearer ${state.token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  // // response Interceptors
  // authFetch.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     console.log(error.response);
  //     // deal with 404(NOT_FOUND) error which means UNAUTHORIZED (no token)
  //     if (error.response.status === 401) {
  //       logoutUser();
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  // ----------Dispatching Actions------------- //
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const clearAllAlert = () => {
    dispatch({ type: CLEAR_ALL_ALERT });
  };

  // ----------Local Storage-------------------------------------------------------------------------------- //
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    state.token = "";
    state.user = "";
  };

  //------------User Control ---------------------------------------------------------------------------------//
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    await axios
      .post(`${state.baseURL}/v1/auth/login`, currentUser)
      .then((response) => {
        const user = response.data.data;
        const token = user.token;
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: { user, token },
        });
        addUserToLocalStorage({ user, token });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: { message: error.response.data.message },
        });
      });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  //--------------Building дата авах-------------------------------------------------------------//
  const getContruction = async (id, sCode) => {
    dispatch({ type: CONTRUCTION_BEGIN });
    try {
      const response = await axios.get(
        `${state.baseURL}/v1/contruction?id=${id}&sCode=${sCode}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const contructions = response.data.data;
      dispatch({
        type: CONTRUCTION_SUCCESS,
        payload: { contructions },
      });
    } catch (error) {
      dispatch({
        type: CONTRUCTION_ERROR,
        payload: { message: error.response.data.message },
      });
    }
    // clearAlert();
  };

  //----------------Захиалгын мэдээлэл---------------------------------------------------------//
  const getOrder = async ({ id, sCode, cCode, page }) => {
    dispatch({ type: GET_ORDER_BEGIN });
    try {
      const response = await axios.get(
        `${state.baseURL}/v1/order?id=${id}&sCode=${sCode}&cCode=${cCode}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const order = response.data.data;
      const pageInfo = response.data.pageInfo;
      dispatch({
        type: GET_ORDER_SUCCESS,
        payload: { order, pageInfo },
      });
    } catch (error) {
      dispatch({
        type: GET_ORDER_ERROR,
        payload: { message: error.response.data.message },
      });
      // clearAlert();
    }
  };

  //----------------Захиалгын мэдээлэл хадгалах---------------------------------------------------------//

  const createOrder = async (orderData) => {
    dispatch({ type: CREATE_ORDER_BEGIN });
    try {
      const response = await axios.post(
        `${state.baseURL}/v1/order`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const message = response.data.message;
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: { message },
      });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_ERROR,
        payload: { message: error.response.data.message },
      });
      // clearAlert();
    }
  };

  //----------------Захиалгын мэдээлэл засах---------------------------------------------------------//

  const editOrder = async (editedData) => {
    dispatch({ type: EDIT_ORDER_BEGIN });
    try {
      const response = await axios.post(
        `${state.baseURL}/v1/order/edit`,
        editedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: EDIT_ORDER_SUCCESS,
        payload: { message: response.data.message },
      });
    } catch (error) {
      dispatch({
        type: EDIT_ORDER_ERROR,
        payload: { message: error.response.data.message },
      });
      // clearAlert();
    }
  };

  //----------------Зураг хагалах---------------------------------------------------------//

  const imageUpload = async (image) => {
    dispatch({ type: EDIT_ORDER_BEGIN });
    try {
      const response = await axios.post(
        `${state.baseURL}/v1/order/imageUpload`,
        image,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const message = response.data.message;
      dispatch({
        type: EDIT_ORDER_SUCCESS,
        payload: { message },
      });
    } catch (error) {
      dispatch({
        type: EDIT_ORDER_ERROR,
        payload: { message: error.response.data.message },
      });
      // clearAlert();
    }
  };

  //----------------Building мэдээлэл хадгалах---------------------------------------------------------//

  const createBuilding = async (buildingData) => {
    dispatch({ type: CONTRUCTION_CREATE_BEGIN });
    try {
      const response = await axios.post(
        `${state.baseURL}/v1/contruction`,
        buildingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const message = response.data.message;
      dispatch({
        type: CONTRUCTION_CREATE_SUCCESS,
        payload: { message },
      });
    } catch (error) {
      dispatch({
        type: CONTRUCTION_CREATE_ERROR,
        payload: { message: error.response.data.message },
      });
      // clearAlert();
    }
  };

  //------------authentication--------------------------------------------------------------------//
  // const checkTokenExpiration = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     if (decodedToken.exp * 1000 < Date.now()) {
  //       logoutUser();
  //     }
  //   }
  // };

  // useEffect(() => {
  //   checkTokenExpiration();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        loginUser,
        logoutUser,
        getContruction,
        getOrder,
        createOrder,
        editOrder,
        imageUpload,
        removeUserFromLocalStorage,
        createBuilding,
        clearAllAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
