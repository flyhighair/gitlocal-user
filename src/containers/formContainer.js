const { bindActionCreators } = require('redux');
const { connect } = require('ink-redux');
const Form = require('../component/form');
const FormActions = require('../actions/form');

const mapStateToProps = state => {
	return {
		step: state.step,
		name: state.name,
		email: state.email,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(FormActions, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Form);