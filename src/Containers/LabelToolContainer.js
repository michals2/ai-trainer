import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import {
  addLabel,
  deleteLabel,
  modifyNewLabel,
  setActiveLabelTypeId
} from "Model/actions/actions";

// View imports
import LabelTool from "Components/LabelTool";

function mapStateToProps(state) {
  return {
    state: state.labelCreator
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { addLabel, deleteLabel, modifyNewLabel, setActiveLabelTypeId },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelTool);
