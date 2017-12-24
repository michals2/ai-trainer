import { connect } from "react-redux";

import AppHeader from "Components/AppHeader";

function mapStateToProps(state) {
  return { labelCreatorStep: state.labelCreator.labelCreatorProgress.step };
}

export default connect(mapStateToProps, null)(AppHeader);
