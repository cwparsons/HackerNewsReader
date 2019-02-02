import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export class StorySummary extends React.PureComponent {
	render() {
		return (
			<View>
				<View style={styles.row}>
					<View>
						<View style={styles.rankContainer}>
							<Text style={styles.rankText}>{this.props.index}</Text>
						</View>
					</View>
					<View style={styles.textContainer}>
						<View>
							<Text>{this.props.item.title}</Text>
						</View>
						<View>
							<Text>
								{this.props.item.score} {this.props.item.score === 1 ? 'point' : 'points'}
								{' '} | {this.props.item.descendants} {this.props.item.descendants === 1 ? 'comment' : 'comments'}
								{' '} | {this.props.item.timeAgo}
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
