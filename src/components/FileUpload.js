import React from "react";

function FileUpload({ setFile }) {
  return (
    <div className="card">
      <h2>Upload Student Excel</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
}

export default FileUpload;