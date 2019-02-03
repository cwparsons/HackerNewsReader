const TEMPLATE = (id) => `https://api.hnpwa.com/v0/item/${id}.json`;

/**
 * @param {number} id
 */
export default async function GetStoryDetail(id) {
	try {
		// Use test data instead.
		// if (__DEV__) {
		// 	return require('../__TestData__/story.json');
		// }

		console.debug(`Trying to retrieve the story details for item ${id}`);

		const storyDetailResponse = await fetch(TEMPLATE(id));

		console.debug(
			`Retrieved the story details for item ${id}: ${JSON.stringify(
				storyDetailResponse
			)}`
		);

		return await storyDetailResponse.json();
	} catch (e) {
		console.error(`Error trying to retrieve the story details for item ${id}`);
	}
}
