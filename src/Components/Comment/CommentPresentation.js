import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import CommentList from '../CommentList';
import HtmlView from '../HtmlView';

import { GLOBAL_STYLES } from '../../Configuration/globalStyles';
import { styles } from './styles';

export class CommentPresentation extends React.PureComponent {
	render() {
		return (
			<TouchableNativeFeedback onLongPress={this.props.onGutterPress}>
				<View
					style={
						this.props.isExpanded ? styles.comment : styles.commentCollapsed
					}
				>
					<View style={[GLOBAL_STYLES.ROW, styles.metadataContainer]}>
						<Text style={styles.userText}>
							{this.props.deleted ? '[deleted]' : this.props.user}
						</Text>
						<Text style={styles.metadataText}>{this.props.time_ago}</Text>

						{this.props.isExpanded ? null : (
							<Text style={styles.metadataText}>[...]</Text>
						)}
					</View>

					{this.props.isExpanded ? (
						<View style={[GLOBAL_STYLES.ROW, styles.childContainer]}>
							<View>
								<View style={styles.collapseColumn} />
							</View>
							<View style={styles.contentColumn}>
								<View style={styles.contentContainer}>
									{this.props.deleted ? (
										<View>
											<Text style={styles.deletedText}>[deleted]</Text>
										</View>
									) : (
										<HtmlView
											html={this.props.content}
											onLinkPress={this.props.onLinkPress}
										/>
									)}
								</View>

								{this.props.comments ? (
									<CommentList comments={this.props.comments} />
								) : null}
							</View>
						</View>
					) : null}
				</View>
			</TouchableNativeFeedback>
		);
	}
}
