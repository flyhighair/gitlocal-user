const {h, Component, Color} = require('ink');
const Input = require('./input');

let description = 'Enter your git user name:';
class NameInput extends Component {
	render() {
		const { name, inputName, submitName } = this.props;
		return(
			<div>
				<Color green>
                  Let's set your git-local-user config<br/>
				</Color>
				<Color>{description}</Color>
				<Input 
					value={name}
					onChange={inputName}
					onSubmit={submitName}/>
			</div>
		);
	}
}

module.exports = NameInput;