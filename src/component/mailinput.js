const {h, Component, Color} = require('ink');
const Input = require('./input');

let description = 'Enter your git user email:';

class MailInput extends Component {
	render() {
		const { email, inputMail, submitMail } = this.props;
		return(
			<div>
				<Color green>
                  Let's set your git-local-user config<br/>
				</Color>
				<Color>{description}</Color>
				<Input 
					value={email}
					onChange={inputMail}
					onSubmit={submitMail}/>
			</div>
		);
	}
}

module.exports = MailInput;