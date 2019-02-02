import React from 'react';
import { FlatList } from 'react-native';
import StorySummary from '../StorySummary';

export class StoryList extends React.PureComponent {
	render() {
		return (
			<FlatList
				data={this.props.data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item, index }) =>
					<StorySummary
						key={item.id.toString()}
						index={index + 1}
						item={item}
					/>
				}
			/>
		);
	}
}
