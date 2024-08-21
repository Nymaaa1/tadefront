import {
  CONTRUCTION_BEGIN,
  CONTRUCTION_SUCCESS,
  CONTRUCTION_ERROR,
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  DELETE_JOB_BEGIN,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_REQUEST_BEGIN,
  GET_REQUEST_SUCCESS,
  GET_ORDER_BEGIN,
  GET_ORDER_SUCCESS,
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
import { initialState } from "./appContext";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_ALL_ALERT:
      return {
        ...state,
        showAlert: false,
        isLoading: false,
        responseMessage: "",
        responseStatus: "",
        contruction: [],
        order: [],
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        responseMessage: action.payload.message,
        responseStatus: "error",
      };
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        token: action.payload.token,
        user: action.payload.user,
        responseMessage: "Амжилттай нэвтэрлээ...",
        responseStatus: "success",
      };
    case CONTRUCTION_CREATE_BEGIN:
      return {
        ...state,
        showAlert: false,
        isLoading: true,
      };
    case CONTRUCTION_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        responseStatus: "success",
        responseMessage: "Амжилттай хадгаллаа",
      };
    case CONTRUCTION_CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: "error",
        message: action.payload.message,
      };
    case EDIT_ORDER_BEGIN:
      return {
        ...state,
        showAlert: false,
        isLoading: true,
      };
    case EDIT_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        responseStatus: "success",
        responseMessage: action.payload.message,
      };
    case EDIT_ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: "error",
        message: action.payload.message,
      };
    case CREATE_ORDER_BEGIN:
      return {
        ...state,
        showAlert: false,
        isLoading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        responseStatus: "success",
        responseMessage: "Амжилттай бүртгэгдлээ",
      };
    case CREATE_ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: "error",
        message: action.payload.message,
      };
    case GET_ORDER_BEGIN:
      return {
        ...state,
        showAlert: false,
        isLoading: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        order: action.payload.order,
        pageInfo: action.payload.pageInfo,
        responseStatus: "success",
        responseMessage: "Амжилттай",
      };
    case GET_ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: "error",
        message: action.payload.message,
      };
    case CONTRUCTION_BEGIN:
      return {
        ...state,
        showAlert: false,
        isLoading: true,
      };
    case CONTRUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        contruction: action.payload.contructions,
        responseStatus: "success",
        responseMessage: "Амжилттай",
      };
    case CONTRUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: "error",
        message: action.payload.message,
      };
    default:
      return state;
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Утга оруулна уу!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
      message: "",
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Хэрэглэгч бүртгэгдлээ...",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      message: "Амжилттай нэвтэрлээ...",
      alertMessage: "success",
    };
  }
  // if (action.type === LOGIN_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     message: action.payload.message,
  //     alertMessage: "error",
  //   };
  // }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Хувийн мэдээлэл шинэчлэгдлээ!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      jobLocation: "",
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      jobLocation: state.userLocation,
      jobType: "full-time",
      status: "IT",
    };
    return { ...state, ...initialState };
  }
  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Бүртгэгдлээ!",
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_REQUEST_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_REQUEST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      request: action.payload.request,
      requestTotal: action.payload.requestTotal,
    };
  }

  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, position, company, jobLocation, jobType, status } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
    };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Шинэчлэгдлээ!",
    };
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SHOW_STATS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: "",
      searchStatus: "all",
      searchType: "all",
      sort: "latest",
    };
  }

  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
