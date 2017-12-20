// React imports
import React, { Component } from "react";

const FileUploader = props => {
  console.log({ props });

  const handleChange = e => {
    const files = [...e.target.files];

    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = event => {
        const url = event.target.result;
        const fileName = file.name;

        props.actions.addFile(url, fileName);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <input multiple id="the-file-input" type="file" onChange={handleChange} />
      {props.files.map((imageObj, i) =>
        <img width={100} key={i} src={imageObj.url} />
      )}
    </div>
  );
};

export default FileUploader;
