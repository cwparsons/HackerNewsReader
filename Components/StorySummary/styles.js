import { StyleSheet } from 'react-native';
import { pt, FONT_SIZE } from '../../Configuration/globalStyles';

export default styles = StyleSheet.create({
	row: {
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		flexDirection: 'row',
		padding: pt(2)
	},
	rankContainer: {
		alignItems: 'center',
		backgroundColor: 'orange',
		flexDirection: 'row',
		height: pt(6),
		justifyContent: 'center',
		padding: pt(1),
		width: pt(6)
	},
	rankText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '700'
	},
	textContainer: {
		flex: 1,
		marginLeft: pt(2)
	},
	titleText: {
		color: 'white',
		fontSize: FONT_SIZE
	},
	metadataContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: pt(1)
	},
	metadataText: {
		color: 'white',
		fontSize: 14
	}
});
