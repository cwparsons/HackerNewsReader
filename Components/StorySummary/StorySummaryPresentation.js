import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

export class StorySummaryPresentation extends React.PureComponent {
	render() {
		return (
			<View>
				<TouchableHighlight onPress={this.props.onItemUrlPress}>
					<View style={styles.row}>
						<View>
							<View style={[
								styles.rankContainer,
								(
									this.props.hasViewed ?
										styles.rankContainerViewed
										: styles.rankContainerNotViewed
								)
							]}>
								<Text style={styles.rankText}>{this.props.index}</Text>
							</View>
						</View>
						<View style={styles.textContainer}>
							<View>
								<Text style={[styles.titleText]}>{this.props.item.title}</Text>
							</View>
							<View style={styles.metadataContainer}>
								<View style={styles.metadataColumn}>
									<Text style={[styles.metadataText]}>
										{this.props.item.score} {this.props.item.score === 1 ? 'point' : 'points'}
									</Text>
								</View>
								<View style={[styles.metadataColumn, { alignItems: 'center' }]}>
									<TouchableHighlight onPress={this.onItemCommentPress}>
										<Text style={[styles.metadataText]}>
											{this.props.item.descendants} {this.props.item.descendants === 1 ? 'comment' : 'comments'}
										</Text>
									</TouchableHighlight>
								</View>
								<View style={[styles.metadataColumn, { alignItems: 'flex-end' }]}>
									<Text style={[styles.metadataText]}>
										{this.props.item.timeAgo}
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