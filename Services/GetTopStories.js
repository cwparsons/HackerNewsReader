import { GetStory } from './GetStory';

const PAGE_SIZE = 20;

let topStoriesList;

export async function GetTopStories(currentPage = 0, refresh = false) {
	const startItem = PAGE_SIZE * currentPage;
	const endItem = PAGE_SIZE * (currentPage + 1);

	console.log(`Getting stories from ${startItem} to ${endItem}.`);

	try {
		if (!topStoriesList || refresh) {
			const topStoriesRequest = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
			topStoriesList = await topStoriesRequest.json();
		}

		console.log(`Retrieved top stories: ${JSON.stringify(topStoriesList)}`);

		const topStoriesPromises = topStoriesList.slice(startItem, endItem).map(async (item) => {
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
