// React imports
import React from "react";

const acceptedFileTypes = ["image/jpeg"];

const FileUploader = props => {
  // console.log({ props });

  const handleChange = e => {
    const files = [...e.target.files];

    console.log({ files });

    files.forEach(file => {
      if (
        acceptedFileTypes.some(
          acceptedFileType => file.type === acceptedFileType
        )
      ) {
        const reader = new FileReader();
        reader.onload = event => {
          const url = event.target.result;
          const fileName = file.name;

          console.log({ url, fileName });

          props.actions.addFile(url, fileName);
        };

        reader.readAsDataURL(file);
      } else {
        console.log("not an image");
      }
    });
  };

  return (
    <div>
      <input multiple id="the-file-input" type="file" onChange={handleChange} />
      {props.files.map((imageObj, i) =>
        <img
          width={100}
          key={i}
          src={imageObj.url}
          alt="something went wrong"
        />
      )}
    </div>
  );
};

export default FileUploader;
