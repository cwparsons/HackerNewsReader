import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import Home from './Screens/Home';
import { BACKGROUND_COLOR } from './Configuration/globalStyles';
import Header from './Components/Header';

export default class App extends React.PureComponent {
	render() {
		return (
			<SafeAreaView style={{
				backgroundColor: BACKGROUND_COLOR,
				flex: 1,
				paddingTop: Platform.OS === 'android' ? 50 : 0
			}}>
				<Header />
				<Home />
			</SafeAreaView>
		);
	}
}
