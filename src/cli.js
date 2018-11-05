#!/usr/bin/env node
'use strict';

const {h, render, Component} = require('ink');
const { Provider } = require('ink-redux');
const FormContainer = require('./containers/formContainer');
const configureStore = require('./store/configureStore');
const meow = require('meow');

const cli = meow(`
Usage
$ cd [project repository]
$ gitlocal-user

set git config local user for each repository.
Perform git config local on an interactive interface.
`);

const initialState = { step: 0, name: '', email: ''};
const store = configureStore(initialState);

class LocalUser extends Component {
	render() {
		return (
			<Provider store={store}>
				<FormContainer />
			</Provider>
		);
	}
}

if (cli.input.length === 0) {
	render(<LocalUser/>);
}
