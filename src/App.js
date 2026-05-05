import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import ClassInput from "./components/ClassInput";

function App() {
  const [file, setFile] = useState(null);
  const [classes, setClasses] = useState([
    { name: "", capacity: "" },
  ]);

  const handleDownload = async () => {
    if (!file) {
      alert("Upload Excel file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("classes", JSON.stringify(classes));

    try {
      const res = await fetch("https://sorting-backend-6lir.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "allocation.xlsx";
      a.click();
    } catch (err) {
      console.error(err);
      alert("Error generating file");
    }
  };

  return (
    <div className="app">
      <Header />

      <div className="container">
        <FileUpload setFile={setFile} />

        <ClassInput classes={classes} setClasses={setClasses} />

        <button className="generate-btn" onClick={handleDownload}>
          Generate & Download Excel
        </button>
      </div>
    </div>
  );
}

export default App;