import { StyleSheet } from 'react-native';
import { pt, FONT_SIZE, ORANGE, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, LIGHT_GREY } from '../../Configuration/globalStyles';

export default styles = StyleSheet.create({
	row: {
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		flexDirection: 'row',
		padding: pt(2)
	},
	rankContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		height: pt(6),
		justifyContent: 'center',
		padding: pt(1),
		width: pt(6)
	},
	rankContainerViewed: {
		backgroundColor: LIGHT_GREY
	},
	rankContainerNotViewed: {
		backgroundColor: ORANGE
	},
	rankText: {
		color: PRIMARY_TEXT_COLOR,
		fontSize: 16,
		fontWeight: '700'
	},
	textContainer: {
		flex: 1,
		marginLeft: pt(2)
	},
	titleText: {
		color: PRIMARY_TEXT_COLOR,
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
		color: SECONDARY_TEXT_COLOR,
		fontSize: 14
	}
});
