const TEMPLATE = (page: string) => `https://api.hnpwa.com/v0/news/${page}.json`;

export async function GetTopStories(currentPage = 1) {
	try {
		console.debug(`Trying to receive top stories from page ${currentPage}`);

		const topStoriesRequest = await fetch(TEMPLATE(currentPage.toString()));

		console.debug(
			`Retrieved top stories: ${JSON.stringify(topStoriesRequest)}`
		);

		return await topStoriesRequest.json();
	} catch (e) {
		console.error(`Error retrieving top stories from page ${currentPage}`);
	}
}
