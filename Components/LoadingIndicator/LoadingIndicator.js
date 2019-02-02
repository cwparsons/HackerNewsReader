import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

export default class LoadingIndicator extends React.PureComponent {
	render() {
		if (this.props.isLoading) {
			return (
				<View style={styles.row}>
					<ActivityIndicator
						size="large"
						color={styles.activityIndicator.color}
					/>
				</View>
			)
		}

		return (
			<>
				{this.props.children}
			</>
		);
	}
}
