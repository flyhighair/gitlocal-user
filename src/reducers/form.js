const { INPUT_NAME, SUBMIT_NAME, INPUT_MAIL, SUBMIT_MAIL } = require("../actions/form");

const update = (state, properties) => {
	return Object.assign({}, state, properties);
};
  
module.exports = (state, action) => {
	switch (action.type) {
	case INPUT_NAME:
		return update(state, { name: action.name });
	case SUBMIT_NAME:
		return update(state, { step: state.step + 1 });
	case INPUT_MAIL:
		return update(state, { email: action.email });
	case SUBMIT_MAIL:
		return update(state, { step: state.step + 1 });
	default:
		return state;
	}
};