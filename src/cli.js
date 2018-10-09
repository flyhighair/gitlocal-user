const {h, render, Component, Color} = require('ink');
const TextInput = require('ink-text-input');
const Box = require('ink-box');
const execSync = require('child_process').execSync;

class LocalUser extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			isNameInputShow: true,
			isMailInputShow: false,
			isResultShow: false
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleMailChange = this.handleMailChange.bind(this);
		this.handleNameSubmit = this.handleNameSubmit.bind(this);
		this.handleMailSubmit = this.handleMailSubmit.bind(this);
		this.renderNameInput = this.renderNameInput.bind(this);
		this.renderMailInput = this.renderMailInput.bind(this);
		this.renderResult = this.renderResult.bind(this);
	}

	handleNameChange(value) {
		this.setState({
			name: value
		});
	}

	handleMailChange(value) {
		this.setState({
			email: value
		});
	}

	handleNameSubmit(value) {
		this.setState({
			name: value,
			isNameInputShow: false,
			isMailInputShow: true
		});
	}

	handleMailSubmit(value) {
		this.setState({
			email: value
		});
		const cmd = `git config --local user.name "${this.state.name}" && git config --local user.email "${this.state.email}"`;
		execSync(cmd);
		this.setState({
			isResultShow: true
		});
	}

	renderMailInput() {
		if (this.state.isMailInputShow) {
			return (
				<div>
					<Color>
                  Enter your git user mail:
					</Color>
					<TextInput
						value={this.state.email}
						onChange={this.handleMailChange}
						onSubmit={this.handleMailSubmit}/><br></br>
				</div>
			);
		} else {
			return null;
		}
	}

	renderNameInput() {
		if(this.state.isNameInputShow) {
			return (
				<div>
					<Color>
                Enter your git user name:
					</Color>
					<TextInput
						value={this.state.name}
						onChange={this.handleNameChange}
						onSubmit={this.handleNameSubmit}
						focus={this.state.isNameInputShow}
					/><br></br>
				</div>
			);
		} else {
			return (
				<div>
					<Color>
                Enter your git user name:{this.state.name}
					</Color>
				</div>
			);
		}
	}

	renderResult() {
		if(this.state.isResultShow) {
			const cmd1 = 'git config --local user.name';
			const cmd2 = 'git config --local user.email';
			const name = execSync(cmd1).toString();
			const email = execSync(cmd2).toString();
			setTimeout(() => {
				process.exit();
			}, 1000);
			return (
				<div>
					<Box
						borderStyle="round"
						borderColor="cyan"
						float="center"
						padding={1}>
						<Color green>Result</Color><br></br>
                      Your git local-name: <Color green>{name}</Color>
                      Your git local-email: <Color green>{email}</Color>
					</Box>
				</div>
			);
		} else {
			return null;
		}
	}

	render() {
		const nameInput = this.renderNameInput();
		const mailInput = this.renderMailInput();
		const result = this.renderResult();
		return (
			<div>
				<Color green>
                  Let's set your git-local-user config<br></br>
				</Color>
				{nameInput}
				{mailInput}
				{result}
			</div>
		);
	}
}

render(<LocalUser/>);
