import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./Excel.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function ExcelToJsonConverter() {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState("");

  const handleConvert = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, {
          raw: false,
          header: 1,
          range: 0,
        });
        const convertedJson = convertListToDefaultFormat(json);
        setJsonData(JSON.stringify(convertedJson, null, 2));
      };
      reader.readAsBinaryString(file);
    } else {
      showToastMessage("File оруулна уу!", "warning");
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

  function handleFileSelect(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    document.getElementById("fileName").innerText = selectedFile.name;
  }

  return (
    <>
      <ToastContainer />
      <div className="paddin">
        <div className="excel-converter">
          <label htmlFor="fileInput" className="custom-file-upload">
            <i className="fas fa-cloud-upload-alt"></i> File хуулах
          </label>
          <input
            id="fileInput"
            type="file"
            accept=".xls,.xlsx"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <span id="fileName" className="default-text">
            Хоосон!
          </span>

          <button onClick={handleConvert}>Хөрвүүлэх</button>
          <pre className="json-output">{jsonData}</pre>
        </div>
      </div>
    </>
  );
}

export default ExcelToJsonConverter;

function convertListToDefaultFormat(list) {
  const defaultKeys = [
    { key: "name", type: "string" },
    { key: "size", type: "string" },
    { key: "count", type: "double" },
    { key: "wayCount", type: "double" },
    { key: "price", type: "double" },
    { key: "allPrice", type: "double" },
    { key: "dollar", type: "double" },
    { key: "allDollar", type: "double" },
    { key: "orderDate", type: "date" },
  ];
  const convertedList = [];

  list.forEach((item) => {
    const convertedItem = {};
    defaultKeys.forEach((keyObject, index) => {
      const value = item[index];
      if (keyObject.type === "double") {
        convertedItem[keyObject.key] = parseFloat(value) || "";
      } else if (keyObject.type === "date") {
        const [day, month, year] = value.split(".");
        convertedItem[keyObject.key] = new Date(
          `${year}-${month}-${day}`
        ).toISOString();
      } else {
        convertedItem[keyObject.key] = value || "";
      }
    });
    convertedList.push(convertedItem);
  });

  return convertedList;
}
