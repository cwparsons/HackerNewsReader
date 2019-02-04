import * as React from 'react';
import { Text, View } from 'react-native';

import Comment from '../Comment';
import { styles } from './styles';
import { IComment } from '../../Interfaces/IComment';

interface ICommentListProps {
	comments: IComment[];
	isRoot: boolean;
}

export class CommentList extends React.PureComponent<ICommentListProps> {
	public render() {
		if (!this.props.comments) {
			return;
		}

		if (
			this.props.isRoot &&
			this.props.comments &&
			this.props.comments.length === 0
		) {
			return (
				<View style={styles.noCommentsContainer}>
					<Text style={styles.noCommentsText}>No comments yet.</Text>
				</View>
			);
		}

		return (
			<>
				{this.props.comments.map((comment) => (
					<Comment key={comment.id} {...comment} />
				))}
			</>
		);
	}
}
