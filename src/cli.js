#!/usr/bin/env node
'use strict';

const {h, render, Component} = require('ink');
const { Provider } = require('ink-redux');
const FormContainer = require('./containers/formContainer');
const configureStore = require('./store/configureStore');

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

render(<LocalUser/>);
