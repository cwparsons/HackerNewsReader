import * as React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import StoryList from '../Components/StoryList';
import { GetTopStories } from '../Services/GetTopStories';
import { IStory } from '../Interfaces/IStory';

interface IHomeScreenProps {
	navigation: NavigationScreenProp<any>;
}

interface IHomeScreenState {
	isRefreshing: boolean;
	data: IStory[];
}

export class HomeScreen extends React.Component<
	IHomeScreenProps,
	IHomeScreenState
> {
	constructor(props: IHomeScreenProps) {
		super(props);

		this.state = {
			isRefreshing: false,
			data: []
		};
	}

	private currentPage = 1;

	static navigationOptions = {
		title: 'Hacker News'
	};

	public async componentDidMount() {
		await this.getStories();
	}

	private async getStories() {
		this.setState({
			isRefreshing: true
		});

		this.currentPage = 1;

		const data = await GetTopStories(this.currentPage);

		this.setState({
			isRefreshing: false,
			data
		});
	}

	private async getMoreStories() {
		const moreData = await GetTopStories(++this.currentPage);

		this.setState({
			data: [...this.state.data, ...moreData]
		});
	}

	public render() {
		return (
			<StoryList
				data={this.state.data}
				onRefresh={this.getStories.bind(this)}
				onEndReached={this.getMoreStories.bind(this)}
				navigation={this.props.navigation}
				refreshing={this.state.isRefreshing}
			/>
		);
	}
}
