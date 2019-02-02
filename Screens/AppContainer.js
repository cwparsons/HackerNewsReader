import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './/Home';
import { ORANGE, PRIMARY_TEXT_COLOR } from '../Configuration/globalStyles';

const AppNavigator = createStackNavigator(
	{
		Home: { screen: Home }
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: ORANGE
			},
			headerTintColor: PRIMARY_TEXT_COLOR
		}
	});

export default AppContainer = createAppContainer(AppNavigator);
