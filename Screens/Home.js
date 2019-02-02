import React from 'react';
import { View } from 'react-native';
import StoryList from '../Components/StoryList';
import { GetTopStories } from '../Services/GetTopStories';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topStories: []
		};
	}

	async componentDidMount() {
		const topStories = await GetTopStories();

		this.setState({
			topStories
		});
	}

	render() {
		return (
			<View>
				<StoryList data={this.state.topStories} />
			</View>
		);
	}
}
