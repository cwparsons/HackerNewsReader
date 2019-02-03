import React from 'react';
import Sentry from 'sentry-expo';

import { AppContainer } from './src/Screens/AppContainer';

Sentry.config('***REMOVED***').install();

export default class App extends React.PureComponent {
	render() {
		return (
			<AppContainer />
		);
	}
}
