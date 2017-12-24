import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";

// Model imports
import { incrementStep, decrementStep } from "Model/actions/actions";

// View imports
import LabelCreatorProgress from "Components/LabelCreatorProgress";

function mapStateToProps(state) {
  return { state: state.labelCreator.labelCreatorProgress };
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
  LabelCreatorProgress
);
