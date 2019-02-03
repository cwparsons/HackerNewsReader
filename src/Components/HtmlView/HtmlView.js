import React from 'react';
import { Text } from 'react-native';
import HTML from 'react-native-render-html';

import { tagsStyles } from './styles';

export class HtmlView extends React.PureComponent {
	render() {
		return (
			<HTML
				{...this.props}
				alterData={({ parent, data }) => {
					if (parent && parent.name === 'code') {
						return data.replace(/\n/g, '___CODE_NEWLINE___');
					}
				}}
				tagsStyles={tagsStyles}
				renderers={{
					code: (_htmlAttribs, _children, _convertedCssStyles, passProps) => {
						const children = passProps.rawChildren
							.map((rawChild) => rawChild.data)
							.join('')
							.split('___CODE_NEWLINE___');

						return (
							<React.Fragment key={passProps.key}>
								{children.map((line, index) => (
									<Text
										key={`${this.props.id}-code-${index}`}
										style={{ fontFamily: 'monospace' }}
									>
										{line} {'\n'}
									</Text>
								))}
							</React.Fragment>
						);
					}
				}}
			/>
		);
	}
}
