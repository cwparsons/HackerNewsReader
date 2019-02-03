import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class StoryHeader extends React.PureComponent {
	render() {
		return (
			<View style={styles.row}>
				<View style={styles.rankContainer}>
					<View style={styles.rank}>
						<Text style={styles.rankText}>{this.props.index}</Text>
					</View>
				</View>
				<View style={styles.textContainer}>
					<View>
						<Text style={[styles.titleText]}>
							{this.props.title} {' '}

							<Text style={[styles.metadataText]}>
								{this.props.domain}
							</Text>
						</Text>
					</View>
					<View style={styles.metadataContainer}>
						<View style={styles.metadataColumn}>
							<Text style={[styles.metadataText]}>
								{this.props.points} {this.props.points === 1 ? 'point' : 'points'}
								{' by '}{this.props.user}
								{' '}{this.props.time_ago}
							</Text>
							<Text style={[styles.metadataText]}>
								{this.props.comments_count} {this.props.comments_count === 1 ? 'comment' : 'comments'}
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
