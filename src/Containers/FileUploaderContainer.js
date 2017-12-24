import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addFile } from "Model/actions/actions";

import FileUploader from "Components/FileUploader";

function mapStateToProps(state) {
  return { files: state.labelCreator.fileUploader.files };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addFile }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUploader);
