import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import { addLabel, deleteLabel } from "Model/actions/actions";

// View imports
import LabelTool from "Components/LabelTool";

function mapStateToProps(state) {
  return { state: state.modelCreator.LabelTool };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addLabel, deleteLabel }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelTool);
