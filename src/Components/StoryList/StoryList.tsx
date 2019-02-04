import * as React from 'react';
import { FlatList, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import StorySummary from '../StorySummary';
import { GREY_DARK } from '../../Configuration/globalStyles';
import { IStory } from '../../Interfaces/IStory';

interface IStoryListProps {
	data: IStory[];
	navigation: NavigationScreenProp<any, any>;
	onEndReached: () => void;
	onRefresh: () => void;
	refreshing: boolean;
}

export class StoryList extends React.PureComponent<IStoryListProps> {
	public render() {
		return (
			<View
				style={{
					backgroundColor: GREY_DARK
				}}
			>
				<FlatList
					data={this.props.data}
					keyExtractor={(item: any) => item.id.toString()}
					onEndReached={this.props.onEndReached}
					onRefresh={this.props.onRefresh}
					renderItem={({ item, index }: { item: any; index: number }) => (
						<StorySummary
							key={`${index}-${item.id.toString()}`}
							index={index + 1}
							item={item}
							navigation={this.props.navigation}
						/>
					)}
					refreshing={this.props.refreshing}
				/>
			</View>
		);
	}
}
