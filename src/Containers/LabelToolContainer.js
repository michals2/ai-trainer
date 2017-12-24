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
  // const labels = state.labels;
  // const labelTypes = state.labelTypes;
  const { labels, labelTypes, fileUploader } = state.labelCreator;
  return {
    files: fileUploader.files,
    labels: labels.labels,
    labelTypes: labelTypes.labelTypes,
    activeLabelTypeId: labelTypes.activeLabelTypeId
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
