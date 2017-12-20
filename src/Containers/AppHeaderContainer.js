import { connect } from "react-redux";

import AppHeader from "Components/AppHeader";

function mapStateToProps(state) {
  return { modelCreatorStep: state.modelCreator.modelCreatorProgress.step };
}

export default connect(mapStateToProps, null)(AppHeader);
