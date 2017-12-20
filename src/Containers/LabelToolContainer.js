import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import { addLabel, deleteLabel, setLabelType } from "Model/actions/actions";

// View imports
import LabelTool from "Components/LabelTool";

function mapStateToProps(state) {
  const modelCreator = state.modelCreator;
  return {
    files: modelCreator.fileUploader.files,
    activeLabelType: modelCreator.labelTool.activeLabelType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { addLabel, deleteLabel, setLabelType },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelTool);
