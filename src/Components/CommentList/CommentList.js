import React from 'react';
import Comment from '../Comment';

export class CommentList extends React.PureComponent {
	render() {
		return (
			<>
				{this.props.comments
					? this.props.comments.map((comment) => (
							<Comment key={comment.id} {...comment} />
					  ))
					: null}
			</>
		);
	}
}
