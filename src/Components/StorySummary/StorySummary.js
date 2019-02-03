import React from 'react';
import { AsyncStorage, Linking } from 'react-native';

import { StorySummaryPresentation } from './StorySummaryPresentation';

export class StorySummary extends React.Component {
	constructor(props) {
		super(props);

		this.onItemCommentPress = this.onItemCommentPress.bind(this);
		this.onItemUrlPress = this.onItemUrlPress.bind(this);

		this.hasViewedKey = `Item:${this.props.item.id}:HasViewed`;

		this.state = {
			hasViewed: false
		};
	}

	async componentDidMount() {
		const hasViewed = await this.getViewedStatus();

		this.setState({ hasViewed });
	}

	async getViewedStatus() {
		try {
			hasViewed = await AsyncStorage.getItem(this.hasViewedKey);

			if (hasViewed != null) {
				return hasViewed === 'true';
			}
		} catch (e) {
			console.log(
				`Error trying to retrieve the viewed status for item ${
					this.props.item.id
				}.`
			);
		}

		return false;
	}

	async setViewedStatus(hasViewedValue = 'true') {
		this.setState({
			hasViewed: true
		});

		try {
			await AsyncStorage.setItem(this.hasViewedKey, hasViewedValue);

			console.log(`Set viewed status for ${this.props.item.id} to true.`);
		} catch (e) {
			console.log(
				`Error trying to set the viewed status for item ${this.props.item.id}.`
			);
		}
	}

	async onItemCommentPress() {
		await this.setViewedStatus();

		this.props.navigation.navigate('Detail', {
			index: this.props.index,
			item: this.props.item
		});
	}

	async onItemUrlPress() {
		await this.setViewedStatus();

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
