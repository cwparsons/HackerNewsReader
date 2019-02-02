import React from 'react';
import { View } from 'react-native';
import StoryList from '../Components/StoryList';
import { GetTopStories } from '../Services/GetTopStories';
import LoadingIndicator from '../Components/LoadingIndicator';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			topStories: []
		};
	}

	componentDidMount() {
		this.getStories();
	}

	async getStories() {
		this.setState({
			isLoading: true
		});

		const topStories = await GetTopStories();

		this.setState({
			isLoading: false,
			topStories
		});
	}

	render() {
		return (
			<View>
				<LoadingIndicator isLoading={this.state.isLoading}>
					<StoryList data={this.state.topStories} />
				</LoadingIndicator>
			</View>
		);
	}
}
