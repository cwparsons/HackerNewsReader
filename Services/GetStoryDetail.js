const TEMPLATE = (id) => `https://api.hnpwa.com/v0/item/${id}.json`;

/**
 * @param {number} id
 */
export default async function GetStoryDetail(id) {
	try {
		// if (__DEV__) {
		// 	return require('../__TestData/story.json');
		// }

		const storyDetailResponse = await fetch(TEMPLATE(id));

		return await storyDetailResponse.json();
	} catch (e) {
		console.log(`Error trying to retrieve the story details for item ${id}`);
	}
}
