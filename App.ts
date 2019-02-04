import * as React from 'react';

import { AppContainer } from './src/Screens/AppContainer';

export default class App extends React.PureComponent {
	render() {
		return (
			React.createElement(AppContainer)
		);
	}
}
