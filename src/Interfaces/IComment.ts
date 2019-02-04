/**
 * Exported from HNPWA API.
 * @see https://api.hnpwa.com/v0/item/1.json
 */
export interface IComment {
	comments?: IComment[];
	comments_count: number;
	content: string;
	deleted?: boolean;
	level: number;
	id: number;
	time_ago: string;
	time: number;
	type: 'comment';
	user: string;
	url: string;
}
