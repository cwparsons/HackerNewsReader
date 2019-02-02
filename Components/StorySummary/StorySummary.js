import React from 'react';
import { Linking } from 'react-native';
import { StorySummaryPresentation } from './StorySummaryPresentation';

export class StorySummary extends React.Component {
	constructor(props) {
		super(props);

		this.onItemCommentPress = this.onItemCommentPress.bind(this);
		this.onItemUrlPress = this.onItemUrlPress.bind(this);

		this.state = {
			hasViewed: false
		};
	}

	onItemCommentPress() {
		Linking.openURL(`https://news.ycombinator.com/item?id=${this.props.item.id}`);
	}

	onItemUrlPress() {
		this.setState({
			hasViewed: true
		});

		Linking.openURL(this.props.item.url);
	}

	render() {
		return (
			<StorySummaryPresentation
				{...this.props}
				hasViewed={this.state.hasViewed}
				onItemCommentPress={this.onItemCommentPress}
				onItemUrlPress={this.onItemUrlPress}
			/>
		);
	}
}
