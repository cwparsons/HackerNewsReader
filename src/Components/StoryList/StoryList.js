import React from 'react';
import { FlatList, View } from 'react-native';
import StorySummary from '../StorySummary';
import { GREY_DARK } from '../../Configuration/globalStyles';

export class StoryList extends React.PureComponent {
	render() {
		return (
			<View
				style={{
					backgroundColor: GREY_DARK
				}}
			>
				<FlatList
					{...this.props}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item, index }) => (
						<StorySummary
							key={item.id.toString()}
							index={index + 1}
							item={item}
							navigation={this.props.navigation}
						/>
					)}
				/>
			</View>
		);
	}
}
