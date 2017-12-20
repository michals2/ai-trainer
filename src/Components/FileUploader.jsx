// React imports
import React from "react";

import { Upload, Icon, message } from "antd";
const Dragger = Upload.Dragger;

const props = {
  name: "file",
  multiple: true,
  action: "./",
  onChange(info) {
    console.log({ info });
  }
};

const FileUploader = () => {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};

export default FileUploader;
