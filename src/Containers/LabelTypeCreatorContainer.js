import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addLabelType, deleteLabelType } from "Model/actions/actions";

import LabelTypeCreator from "Components/LabelTypeCreator";

function mapStateToProps(state) {
  return { state: state.labelCreator.labelTypes };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addLabelType, deleteLabelType }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelTypeCreator);
