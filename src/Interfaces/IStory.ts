import { IComment } from './IComment';

/**
 * Exported from HNPWA API.
 * @see https://api.hnpwa.com/v0/news/1.json
 */
export interface IStory {
	comments_count: number;
	comments: IComment[];
	content: string;
	domain: string;
	id: number;
	points: number;
	time_ago: string;
	time: number;
	title: string;
	type: 'link';
	url: string;
	user: string;
}
