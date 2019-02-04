import { StyleSheet } from 'react-native';
import {
	pt,
	SECONDARY_FONT_SIZE,
	WHITE_25,
	WHITE_70,
	WHITE
} from '../../Configuration/globalStyles';

export const styles = StyleSheet.create({
	comment: {
		paddingTop: pt(1)
	},
	commentCollapsed: {
		paddingBottom: pt(1),
		paddingTop: pt(1)
	},
	metadataContainer: {
		marginBottom: pt(1)
	},
	userText: {
		color: WHITE,
		fontSize: SECONDARY_FONT_SIZE,
		marginLeft: pt(1)
	},
	metadataText: {
		color: WHITE_70,
		fontSize: SECONDARY_FONT_SIZE,
		marginLeft: pt(1)
	},
	collapseColumn: {
		borderLeftWidth: 1,
		borderLeftColor: WHITE_25,
		flex: 1,
		marginBottom: pt(2),
		marginLeft: pt(1),
		marginTop: 4,
		paddingRight: pt(0.75)
	},
	contentColumn: {
		flex: 1
	},
	contentContainer: {
		paddingLeft: pt(1)
	},
	deletedText: {
		color: WHITE,
		marginBottom: pt(2)
	},
	noCommentsText: {
		color: WHITE
	}
});
