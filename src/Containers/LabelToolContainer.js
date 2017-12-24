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
  const labelCreator = state.labelCreator;
  return {
    files: labelCreator.fileUploader.files,
    labels: labelCreator.labelTool.labels,
    labelTypes: labelCreator.labelTool.labelTypes,
    activeLabelTypeId: labelCreator.labelTool.activeLabelTypeId
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
