import React from 'react';
import { ScrollView, View } from 'react-native';

import GetStoryDetail from '../Services/GetStoryDetail';
import CommentList from '../Components/CommentList';
import LoadingIndicator from '../Components/LoadingIndicator';
import { StorySummaryPresentation } from '../Components/StorySummary/StorySummaryPresentation';
import { GREY_DARK } from '../Configuration/globalStyles';

export class DetailScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			data: this.props.navigation.getParam('item')
		};
	}

	static navigationOptions = {
		title: 'Comments'
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
			<ScrollView
				style={{
					backgroundColor: GREY_DARK
				}}
			>
				{this.state.data || this.props.navigation.getParam('index').title ? (
					<StorySummaryPresentation
						index={this.props.navigation.getParam('index')}
						item={this.state.data}
					/>
				) : null}

				<LoadingIndicator isLoading={this.state.isLoading}>
					{this.state.data && this.state.data.comments ? (
						<View
							style={{
								marginTop: 8,
								paddingLeft: 8,
								paddingRight: 16
							}}
						>
							<CommentList comments={this.state.data.comments} root={true} />
						</View>
					) : null}
				</LoadingIndicator>
			</ScrollView>
		);
	}
}
