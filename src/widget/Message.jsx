import { useAppContext } from "../api/appContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";

const Message = ({ messages, type }) => {
  const { responseMessage, responseStatus } = useAppContext();

  useEffect(() => {
    if (messages && type) {
      showToastMessage(messages, type);
    } else {
      if (responseStatus && responseMessage) {
        showToastMessage(responseMessage, responseStatus);
      }
    }
  }, [responseMessage, responseStatus, messages, type]);

  const showToastMessage = (message, type) => {
    if (type === "error") {
      toast.error(message);
    } else if (type === "success") {
      toast.success(message);
    } else if (type === "warning") {
      toast.warning(message);
    }
  };

  return <ToastContainer />;
};

export default Message;
