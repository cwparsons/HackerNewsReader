import React from 'react';
import { View } from 'react-native';
import StoryList from '../Components/StoryList';
import { GetTopStories } from '../Services/GetTopStories';

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);

		this.currentPage = 1;

		this.state = {
			isRefreshing: false,
			data: []
		};
	}

	static navigationOptions = {
		title: 'Hacker News'
	};

	componentDidMount() {
		this.getStories();
	}

	async getStories() {
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

	async getMoreStories() {
		const moreData = await GetTopStories(++this.currentPage);

		this.setState({
			data: [...this.state.data, ...moreData]
		});
	}

	render() {
		return (
			<View>
				<StoryList
					data={this.state.data}
					onRefresh={this.getStories.bind(this)}
					onEndReached={this.getMoreStories.bind(this)}
					navigation={this.props.navigation}
					refreshing={this.state.isRefreshing}
				/>
			</View>
		);
	}
}
