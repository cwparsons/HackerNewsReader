import React from 'react';
import { Vibration } from 'react-native';

import { CommentPresentation } from './CommentPresentation';

export class Comment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: true
		};
	}

	onGutterPress() {
		this.setState((state) => {
			return {
				isExpanded: !state.isExpanded
			};
		});

		Vibration.vibrate(3);
	}

	render() {
		return (
			<CommentPresentation
				{...this.props}
				isExpanded={this.state.isExpanded}
				onGutterPress={this.onGutterPress.bind(this)}
			/>
		);
	}
}
