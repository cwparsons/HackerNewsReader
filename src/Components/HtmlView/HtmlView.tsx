import * as React from 'react';
import { Text } from 'react-native';
import * as HTML from 'react-native-render-html';

import { tagsStyles } from './styles';

interface IHtmlViewProps {
	html: string;
	id: number;
	onLinkPress: (e: Event, href: string) => void;
}

export class HtmlView extends React.PureComponent<IHtmlViewProps> {
	public render() {
		return (
			<HTML
				{...this.props}
				alterData={({ parent, data }: { parent: any; data: string }) => {
					if (parent && parent.name === 'code') {
						return data.replace(/\n/g, '___CODE_NEWLINE___');
					}
				}}
				tagsStyles={tagsStyles}
				renderers={{
					code: (
						_htmlAttribs: any,
						_children: any,
						_convertedCssStyles: any,
						passProps: any
					) => {
						const children = passProps.rawChildren
							.map((rawChild: any) => rawChild.data)
							.join('')
							.split('___CODE_NEWLINE___');

						return (
							<React.Fragment key={passProps.key}>
								{children.map((line: string, index: number) => (
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
