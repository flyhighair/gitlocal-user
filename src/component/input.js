const {h, render, Component} = require('ink');
const TextInput = require('ink-text-input');

class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<TextInput
				value={this.props.value}
				onChange={this.props.onChange}
				onSubmit={this.props.onSubmit}
			/>
		);
	}
}

module.exports = Input;