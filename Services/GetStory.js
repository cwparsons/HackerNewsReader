/**
 * @param {number} id
 */
export default async function GetStory(id) {
	console.log(`Getting story id ${id}`);

	const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

	return await story.json();
}
