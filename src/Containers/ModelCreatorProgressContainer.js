import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";

// Model imports
import { incrementStep, decrementStep } from "Model/actions/actions";

// View imports
import ModelCreatorProgress from "Components/ModelCreatorProgress";

function mapStateToProps(state) {
  return { state: state.modelCreator.modelCreatorProgress };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { incrementStep, decrementStep, push },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelCreatorProgress
);
