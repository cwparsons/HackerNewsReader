import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export class Header extends React.PureComponent {
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.headerText}>Hacker News Clone</Text>
			</View>
		);
	}
}
