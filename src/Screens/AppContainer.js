import { createAppContainer, createStackNavigator } from 'react-navigation';

import { HomeScreen } from './HomeScreen';
import { DetailScreen } from './DetailScreen';
import { ORANGE, WHITE } from '../Configuration/globalStyles';

const AppNavigator = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		Detail: { screen: DetailScreen }
	},
	{
		initialRouteName: 'Home',
		// When testing the detail page, automatically open to the detail page.
		// initialRouteName: 'Detail',
		// initialRouteParams: {
		// 	item: {
		// 		id: 16493489,
		// 		index: 1
		// 	}
		// },
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: ORANGE
			},
			headerTintColor: WHITE
		}
	}
);

export const AppContainer = createAppContainer(AppNavigator);
