import { StyleSheet } from 'react-native';
import { pt } from '../../Configuration/globalStyles';

export default styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		padding: pt(1)
	},
	rankContainer: {
		alignItems: 'center',
		backgroundColor: 'orange',
		flexDirection: 'row',
		height: pt(5),
		justifyContent: 'center',
		padding: pt(1),
		width: pt(5)
	},
	rankText: {
		color: 'white'
	},
	textContainer: {
		flex: 1,
		marginLeft: pt(1)
	},
	metadataContainer: {
		flexDirection: 'row'
	}
});
