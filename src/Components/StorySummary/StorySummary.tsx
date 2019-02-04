import * as React from 'react';
import { AsyncStorage, Linking } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { StorySummaryPresentation } from './StorySummaryPresentation';

interface IStorySummaryProps {
	index: number;
	item: any;
	navigation: NavigationScreenProp<any, any>;
}

interface IStorySummaryState {
	hasViewed: boolean;
}

export class StorySummary extends React.Component<
	IStorySummaryProps,
	IStorySummaryState
> {
	private _hasViewedKey: string;

	constructor(props: IStorySummaryProps) {
		super(props);

		this.onItemCommentPress = this.onItemCommentPress.bind(this);
		this.onItemUrlPress = this.onItemUrlPress.bind(this);

		this._hasViewedKey = `Item:${this.props.item.id}:HasViewed`;
	}

	public readonly state = {
		hasViewed: false
	};

	public async componentDidMount() {
		const hasViewed = await this.getViewedStatus();

		this.setState({ hasViewed });
	}

	private async getViewedStatus() {
		try {
			const hasViewed = await AsyncStorage.getItem(this._hasViewedKey);

			if (hasViewed !== null) {
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

	private async setViewedStatus(hasViewedValue = 'true') {
		this.setState({
			hasViewed: true
		});

		try {
			await AsyncStorage.setItem(this._hasViewedKey, hasViewedValue);

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

	private async onItemUrlPress() {
		await this.setViewedStatus();

		await Linking.openURL(this.props.item.url);
	}

	public render() {
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
