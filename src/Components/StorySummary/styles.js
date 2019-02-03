import { StyleSheet } from 'react-native';
import { pt, FONT_SIZE, ORANGE, WHITE, WHITE_70, GREY_LIGHT } from '../../Configuration/globalStyles';

export const styles = StyleSheet.create({
	row: {
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		flexDirection: 'row',
		padding: pt(2),
		paddingLeft: 0
	},
	rank: {
		alignItems: 'center',
		flexDirection: 'row',
		height: pt(6),
		justifyContent: 'center',
		padding: pt(1),
		width: pt(6)
	},
	rankViewed: {
		backgroundColor: GREY_LIGHT
	},
	rankNotViewed: {
		backgroundColor: ORANGE
	},
	rankText: {
		color: WHITE,
		fontSize: 16,
		fontWeight: '700'
	},
	textContainer: {
		flex: 1,
		marginLeft: pt(2)
	},
	titleText: {
		color: WHITE,
		fontSize: FONT_SIZE
	},
	metadataContainer: {
		flexDirection: 'row',
		marginTop: pt(1)
	},
	metadataColumn: {
		flexBasis: 0,
		flexGrow: 1
	},
	metadataText: {
		color: WHITE_70,
		fontSize: 14
	}
});
