import React, { Component } from 'react';

import App from '../components/App';

import { 
    actions
} from './actions';

import {
    Store
} from './store';

export default class Main extends Component {
    state = Store

	dispatch(actionName, options) {
		const actionToDo = actions[actionName];
		actionToDo(this.state, options).then((newStore) => {
			this.setState(newStore);
		});	
	}

	render() {
		const sharedProps = {
			dispatch: (...args) => this.dispatch(...args),
		};

        return <App {...this.state} {...sharedProps} /> 
	}
}
