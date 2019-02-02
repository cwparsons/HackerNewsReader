import { StyleSheet } from 'react-native';
import { pt, ORANGE, PRIMARY_TEXT_COLOR } from '../../Configuration/globalStyles';

export default styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		backgroundColor: ORANGE,
		padding: pt(2)
	},
	headerText: {
		color: PRIMARY_TEXT_COLOR,
		fontSize: 16,
		fontWeight: '700'
	}
});
