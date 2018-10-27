const execSync = require('child_process').execSync;

const INPUT_NAME = 'INPUT_NAME';
const SUBMIT_NAME = 'SUBMIT_NAME';
const INPUT_MAIL = 'INPUT_MAIL';
const SUBMIT_MAIL = 'SUBMIT_MAIL';

const inputName = val => {
	return { type: INPUT_NAME, name: val };
};

const submitName = val => {
	const cmd1 = `git config --local user.name ${val}`;
	execSync(cmd1);	
	return { type: SUBMIT_NAME };
};

const inputMail = val => {
	return { type: INPUT_MAIL, email: val };
};

const submitMail = val => {
	const cmd2 = `git config --local user.email ${val}`;
	execSync(cmd2);
	return { type: SUBMIT_MAIL };
};

module.exports = {
	INPUT_NAME,
	SUBMIT_NAME,
	INPUT_MAIL,
	SUBMIT_MAIL,
	inputName,
	submitName,
	inputMail,
	submitMail
};