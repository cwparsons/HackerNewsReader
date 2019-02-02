import { GetStory } from './GetStory';

export async function GetTopStories() {
	console.log(`Getting top stories...`);

	try {
		const topStoriesRequest = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
		const topStoriesList = await topStoriesRequest.json();

		console.log(`Retrieved top stories: ${JSON.stringify(topStoriesList)}`);

		const topStoriesPromises = topStoriesList.slice(0, 30).map(async (item) => {
			const story = await GetStory(item);

			return {
				id: item,
				...story
			};
		});

		return await Promise.all(topStoriesPromises);
	} catch (e) {
		console.log('Error retrieving top stories');
	}
}
