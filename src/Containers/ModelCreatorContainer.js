import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import * as modelCreatorActions from "Model/actions/modelCreatorActions";

// View imports
import ModelCreator from "Components/ModelCreator/ModelCreator";

function mapStateToProps(state) {
  return { state: state.modelCreator };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(modelCreatorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelCreator);
