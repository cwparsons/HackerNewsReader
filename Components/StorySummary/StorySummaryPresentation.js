import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

export class StorySummaryPresentation extends React.PureComponent {
	render() {
		return (
			<View>
				<TouchableHighlight onPress={this.props.onItemUrlPress}>
					<View style={styles.row}>
						<View style={styles.rankContainer}>
							<View style={[
								styles.rank,
								(
									this.props.hasViewed ?
										styles.rankViewed
										: styles.rankNotViewed
								)
							]}>
								<Text style={styles.rankText}>{this.props.index}</Text>
							</View>
						</View>
						<View style={styles.textContainer}>
							<View>
								<Text style={[styles.titleText]}>
									{this.props.item.title} {' '}

									<Text style={[styles.metadataText]}>
										{this.props.item.domain}
									</Text>
								</Text>
							</View>
							<View style={styles.metadataContainer}>
								<View style={styles.metadataColumn}>
									<Text style={[styles.metadataText]}>
										{this.props.item.points} {this.props.item.points === 1 ? 'point' : 'points'}
									</Text>
								</View>
								<View style={[styles.metadataColumn, { alignItems: 'center' }]}>
									<TouchableHighlight onPress={this.props.onItemCommentPress}>
										<Text style={[styles.metadataText]}>
											{this.props.item.comments_count} {this.props.item.comments_count === 1 ? 'comment' : 'comments'}
										</Text>
									</TouchableHighlight>
								</View>
								<View style={[styles.metadataColumn, { alignItems: 'flex-end' }]}>
									<Text style={[styles.metadataText]}>
										{this.props.item.time_ago}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}