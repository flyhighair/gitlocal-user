const { h, Component } = require('ink');
const NameInput = require('./nameinput');
const MailInput = require('./mailinput');
const ResultBox = require('./resultbox');

class Form extends Component {
	inputComponent() {
		switch (this.props.step) {
		case 0:
			return <NameInput {...this.props}/>;
		case 1:
			return <MailInput {...this.props}/>;
		case 2:
			return <ResultBox />;
		default:
			return <NameInput />;
		}
	}

	render() {
		return(
			<span>{this.inputComponent()}</span>
		);
	}
}

module.exports = Form;