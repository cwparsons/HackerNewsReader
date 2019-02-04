import { StyleSheet } from 'react-native';
import { pt, WHITE, FONT_SIZE } from '../../Configuration/globalStyles';

export const styles = StyleSheet.create({
	noCommentsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: pt(1)
	},
	noCommentsText: {
		color: WHITE,
		fontSize: FONT_SIZE
	}
});
