export async function GetTopStories(currentPage = 1) {
	try {
		const topStoriesRequest = await fetch(`https://api.hnpwa.com/v0/news/${currentPage}.json`);

		console.log(`Retrieved top stories: ${JSON.stringify(topStoriesRequest)}`);

		return await topStoriesRequest.json();
	} catch (e) {
		console.log('Error retrieving top stories');
	}
}
