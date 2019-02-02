import React from 'react';
import { Linking, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

export class StorySummary extends React.PureComponent {
	constructor(props) {
		super(props);

		this.onItemCommentPress = this.onItemCommentPress.bind(this);
		this.onItemUrlPress = this.onItemUrlPress.bind(this);
	}

	onItemCommentPress() {
		Linking.openURL(`https://news.ycombinator.com/item?id=${this.props.item.id}`);
	}

	onItemUrlPress() {
		Linking.openURL(this.props.item.url);
	}

	render() {
		return (
			<View>
				<View style={styles.row}>
					<View>
						<TouchableHighlight onPress={this.onItemUrlPress}>
							<View style={styles.rankContainer}>
								<Text style={styles.rankText}>{this.props.index}</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.textContainer}>
						<View>
							<TouchableHighlight onPress={this.onItemUrlPress}>
								<Text style={[styles.titleText]}>{this.props.item.title}</Text>
							</TouchableHighlight>
						</View>
						<View style={styles.metadataContainer}>
							<View>
								<Text style={[styles.metadataText]}>
									{this.props.item.score} {this.props.item.score === 1 ? 'point' : 'points'}
								</Text>
							</View>
							<View>
								<TouchableHighlight onPress={this.onItemCommentPress}>
									<Text style={[styles.metadataText]}>
										{this.props.item.descendants} {this.props.item.descendants === 1 ? 'comment' : 'comments'}
									</Text>
								</TouchableHighlight>
							</View>
							<View>
								<Text style={[styles.metadataText]}>
									{this.props.item.timeAgo}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
