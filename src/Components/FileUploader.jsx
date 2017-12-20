// React imports
import React, { Component } from "react";

const FileUploader = props => {
  console.log({ props });

  const handleChange = e => {
    const files = [...e.target.files];

    files.forEach(file => {
      console.log({ file });
      const reader = new FileReader();

      reader.onload = event => {
        const url = event.target.result;
        console.log({ url });
        // this.setState({ images: [...this.state.images, url] }, () =>
        //   console.log(this.state)
        // );
        props.actions.addFile(url);
      };

      reader.readAsDataURL(files[0]);
    });
  };

  return (
    <div>
      <input multiple id="the-file-input" type="file" onChange={handleChange} />
      {props.files.map((image, i) => <img width={100} key={i} src={image} />)}
    </div>
  );
};

export default FileUploader;
