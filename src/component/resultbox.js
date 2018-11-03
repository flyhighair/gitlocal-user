const {h, render, Color, Component} = require('ink');
const Box = require('ink-box');
const execSync = require('child_process').execSync;

class ResultBox extends Component {
	showResult() {
		const cmd1 = 'git config --local user.name';
		const cmd2 = 'git config --local user.email';
		const name = execSync(cmd1).toString();
		const email = execSync(cmd2).toString();
		setTimeout(() => {
			process.exit();
		}, 1000);
		return {name, email};
	}

	render() {
		let {name, email} = this.showResult();
		return (
			<div>
				<Box
					borderStyle="round"
					borderColor="cyan"
					float="center"
					padding={1}>
					<Color green>Result</Color><br/>
                    Your git local-name: <Color green>{name}</Color>
                    Your git local-email: <Color green>{email}</Color>
				</Box>
			</div>
		);
	}
}

module.exports = ResultBox;