import moment from 'moment';

/**
 * @param {number} id
 */
export async function GetStory(id) {
	const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

	const story = await storyResponse.json();
	story.timeAgo = moment(story.time, 'X').fromNow();

	return story;
}
