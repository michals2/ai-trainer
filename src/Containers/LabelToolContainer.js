import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import { addLabel, deleteLabel, setLabelType } from "Model/actions/actions";

// View imports
import LabelTool from "Components/LabelTool";

function mapStateToProps(state) {
  return { state: state.modelCreator };
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
