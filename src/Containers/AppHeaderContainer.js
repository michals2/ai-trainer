import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppHeader from "Components/AppHeader";

function mapStateToProps(state) {
  return { modelCreatorStep: state.modelCreator.modelCreatorProgress.step };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({ push }, dispatch)
//   };
// }

export default connect(mapStateToProps, null)(AppHeader);
