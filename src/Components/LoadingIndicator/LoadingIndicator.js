import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { ORANGE } from '../../Configuration/globalStyles';
import { styles } from './styles';

export class LoadingIndicator extends React.PureComponent {
	render() {
		if (this.props.isLoading) {
			return (
				<View style={styles.row}>
					<ActivityIndicator
						size="large"
						color={ORANGE}
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
