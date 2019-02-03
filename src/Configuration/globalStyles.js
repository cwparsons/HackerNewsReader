import { StyleSheet } from 'react-native';

/**
 * @param {number} n
 */
export function pt(n) {
	return n * 8;
}

export const FONT_SIZE = 15;
export const SECONDARY_FONT_SIZE = 13;

export const LINE_HEIGHT_RATIO = 1.4;
export const LINE_HEIGHT = FONT_SIZE * LINE_HEIGHT_RATIO;
export const LINE_HEIGHT_SMALL = SECONDARY_FONT_SIZE * LINE_HEIGHT_RATIO;

// Colours

export const ORANGE = '#ff6500';
export const GREY_LIGHT = '#444';
export const GREY_DARK = '#212121';

export const WHITE = '#ffffff';
export const WHITE_70 = 'rgba(255, 255, 255, 0.70)';
export const WHITE_50 = 'rgba(255, 255, 255, 0.50)';
export const WHITE_25 = 'rgba(255, 255, 255, 0.25)';

// Global styles

export const GLOBAL_STYLES = StyleSheet.create({
	ROW: {
		flex: 1,
		flexDirection: 'row'
	}
});
