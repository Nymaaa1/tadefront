import React, { useState } from "react";
import { GoX } from "react-icons/go";
import { useAppContext } from "../../../api/appContext";
import Loader from "../../../widget/Spinner";
import { images } from "../../../components/main/constants";
import "./Upload.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadPhoto = ({ onClose, state }) => {
  const { imageUpload, isLoading, clearAllAlert } = useAppContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const { navid, navsCode, navcCode, navoCode, imageUrl } = state;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (
        fileType === "image/png" ||
        fileType === "image/jpeg" ||
        fileType === "image/jpg"
      ) {
        setSelectedFile(file);
      } else {
        toast.warning("Зураг оруулна уу!");
        event.target.value = null;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile, selectedFile.name);
      formData.append("sCode", navsCode);
      formData.append("id", navid);
      formData.append("cCode", navcCode);
      formData.append("oCode", navoCode);
      clearAllAlert();
      imageUpload(formData);
      setSelectedFile(null);
      onClose();
    } else {
      toast.warning("Зураг оруулна уу!");
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
        <div className="upload-main">
          {imageUrl === null ? (
            <div className="upload-container">
              <div className="upload-header">
                <h2>Upload Photo</h2>
                <div className="close" onClick={onClose}>
                  <GoX size={30} />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="image-container">
                  {selectedFile ? (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Uploaded"
                      className="uploaded-image"
                    />
                  ) : (
                    <img
                      src={images.about}
                      alt="Placeholder"
                      className="uploaded-image"
                    />
                  )}
                </div>
                <button className="btn btn-success" type="submit">
                  Хадгалах
                </button>
              </form>
            </div>
          ) : (
            <img
              src={`https://tade.mn/v1/upload/${imageUrl}`}
              alt="Uploaded"
              className="uploaded-image"
            />
          )}
        </div>
      )}
    </>
  );
};

export default UploadPhoto;
