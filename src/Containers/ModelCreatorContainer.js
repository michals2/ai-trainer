import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import * as modelCreatorProgressActions from "Model/actions/modelCreatorProgressActions";

// View imports
import ModelCreator from "Components/ModelCreator";

function mapStateToProps(state) {
  return { state: state.modelCreator.modelCreatorProgress };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(modelCreatorProgressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelCreator);
