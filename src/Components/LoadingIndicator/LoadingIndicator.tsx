import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { ORANGE } from '../../Configuration/globalStyles';
import { styles } from './styles';

interface ILoadingIndicatorProps {
	children: React.ReactNode;
	isLoading: boolean;
}

export class LoadingIndicator extends React.PureComponent<
	ILoadingIndicatorProps
> {
	public render() {
		if (this.props.isLoading) {
			return (
				<View style={styles.row}>
					<ActivityIndicator size="large" color={ORANGE} />
				</View>
			);
		}

		return <>{this.props.children}</>;
	}
}
