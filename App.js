import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import Home from './Screens/Home';

export default class App extends React.PureComponent {
	render() {
		return (
			<SafeAreaView style={{
				paddingTop: Platform.OS === 'android' ? 50 : 0
			}}>
				<Home />
			</SafeAreaView>
		);
	}
}
