import * as React from 'react';
import { Linking, Vibration } from 'react-native';

import { CommentPresentation } from './CommentPresentation';
import { IComment } from '../../Interfaces/IComment';

interface ICommentState {
	isExpanded: boolean;
}

export class Comment extends React.Component<IComment, ICommentState> {
	constructor(props: IComment) {
		super(props);
	}

	public readonly state = {
		isExpanded: true
	};

	private onGutterPress() {
		this.setState((state) => {
			return {
				isExpanded: !state.isExpanded
			};
		});

		Vibration.vibrate(3, false);
	}

	/**
	 * @param {string} href
	 */
	private async onLinkPress(_e: Event, href: string) {
		await Linking.openURL(href);
	}

	public render() {
		return (
			<CommentPresentation
				{...this.props}
				isExpanded={this.state.isExpanded}
				onGutterPress={this.onGutterPress.bind(this)}
				onLinkPress={this.onLinkPress.bind(this)}
			/>
		);
	}
}
