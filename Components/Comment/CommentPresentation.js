import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import HTML from 'react-native-render-html';

import CommentList from '../CommentList';
import { GLOBAL_STYLES } from '../../Configuration/globalStyles';
import { styles, tagsStyles } from './styles';

export class CommentPresentation extends React.PureComponent {
	render() {
		return (
			<TouchableNativeFeedback onLongPress={this.props.onGutterPress}>
				<View style={
					this.props.isExpanded ?
						styles.comment
						:
						styles.commentCollapsed
				}>
					<View style={[GLOBAL_STYLES.ROW, styles.metadataContainer]}>
						<Text style={styles.userText}>
							{this.props.user}
						</Text>
						<Text style={styles.metadataText}>
							{this.props.time_ago}
						</Text>

						{
							this.props.isExpanded ?
								null
								:
								<Text style={styles.metadataText}>
									[...]
								</Text>
						}
					</View>

					{
						this.props.isExpanded ?
							<View style={[GLOBAL_STYLES.ROW, styles.childContainer]}>
								<View>
									<View style={styles.collapseColumn} />
								</View>
								<View style={styles.contentColumn}>
									<View style={styles.contentContainer}>
										<HTML
											alterData={({ parent, data }) => {
												if (parent && parent.name === "code") {
														return data.replace(/\n/g, "___CODE_NEWLINE___");
												}
											}}
											html={this.props.content}
											tagsStyles={tagsStyles}
											renderers={{
												code: (_htmlAttribs, _children, _convertedCssStyles, passProps) => {
													const children = passProps.rawChildren
														.map(rawChild => rawChild.data)
														.join("")
														.split("___CODE_NEWLINE___");

													return (
														<React.Fragment key={passProps.key}>
															{children.map((line, index) => (
																<Text key={`${this.props.id}-code-${index}`} style={{ fontFamily: 'monospace' }}>
																	{line} {'\n'}
																</Text>
															))}
														</React.Fragment>
													)
												}
											}}
										/>
									</View>

									{
										this.props.comments ?
											<CommentList comments={this.props.comments} />
											:
											null
									}
								</View>
							</View>
							:
							null
					}
				</View>
			</TouchableNativeFeedback>
		);
	}
}