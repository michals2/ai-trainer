import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import {
  addLabel,
  deleteLabel,
  setActiveLabelId,
  modifyLabel
} from "Model/actions/actions";

// View imports
import LabelTool from "Components/LabelTool";

function mapStateToProps(state) {
  const modelCreator = state.modelCreator;
  return {
    files: modelCreator.fileUploader.files,
    labels: modelCreator.labelTool.labels,
    labelTypes: modelCreator.labelTool.labelTypes,
    activeLabelTypeId: modelCreator.labelTool.activeLabelTypeId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { addLabel, deleteLabel, setActiveLabelId, modifyLabel },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelTool);
