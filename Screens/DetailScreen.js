import React from 'react';
import { ScrollView } from 'react-native';

import GetStoryDetail from '../Services/GetStoryDetail';
import CommentList from '../Components/CommentList';
import StoryHeader from '../Components/StoryHeader';
import LoadingIndicator from '../Components/LoadingIndicator';
import { BACKGROUND_COLOR, pt } from '../Configuration/globalStyles';

export default class DetailScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			data: this.props.navigation.getParam('item')
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title'),
		};
	};

	componentDidMount() {
		this.getStoryDetail();
	}

	async getStoryDetail() {
		const data = await GetStoryDetail(this.state.data.id);

		this.setState({
			isLoading: false,
			data
		});
	}

	render() {
		return (
			<ScrollView style={{
				backgroundColor: BACKGROUND_COLOR,
				paddingLeft: pt(1),
				paddingRight: pt(2)
			}}>
				<StoryHeader
					index={this.props.navigation.getParam('index')}
					{...this.state.data}
				/>
				<LoadingIndicator isLoading={this.state.isLoading}>
					<CommentList comments={this.state.data.comments} />
				</LoadingIndicator>
			</ScrollView>
		);
	}
}
