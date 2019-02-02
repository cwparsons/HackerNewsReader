import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import Home from './Screens/Home';
import { BACKGROUND_COLOR } from './Configuration/globalStyles';
import Header from './Components/Header';
import { Constants } from 'expo';

export default class App extends React.PureComponent {
	render() {
		return (
			<SafeAreaView style={{
				backgroundColor: BACKGROUND_COLOR,
				flex: 1,
				paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
			}}>
				<Header />
				<Home />
			</SafeAreaView>
		);
	}
}
