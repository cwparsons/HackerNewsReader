import React from 'react';
import { View } from 'react-native';
import StoryList from '../Components/StoryList';
import { GetTopStories } from '../Services/GetTopStories';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isRefreshing: false,
			topStories: []
		};
	}

	componentDidMount() {
		this.getStories();
	}

	async getStories() {
		this.setState({
			isRefreshing: true
		});

		const topStories = await GetTopStories();

		this.setState({
			isRefreshing: false,
			topStories
		});
	}

	render() {
		return (
			<View>
				<StoryList
					data={this.state.topStories}
					onRefresh={this.getStories.bind(this)}
					refreshing={this.state.isRefreshing}
				/>
			</View>
		);
	}
}
