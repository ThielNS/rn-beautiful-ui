import { StyleSheet } from 'react-native';
import { TEXT_TYPES } from './constants';
import COLORS from '../../utils/colors';

const {
	TITLE,
	SUBHEADER,
	QUOTE,
	LARGE_BODY,
	BODY,
	SECONDARY_BODY,
	PLACEHOLDER,
	BUTTON,
} = TEXT_TYPES;

const styles = StyleSheet.create({
	[TITLE]: {
		fontSize: 30,
		fontWeight: 'bold',
		color: COLORS.SECONDARY,
	},
	[SUBHEADER]: {
		fontSize: 20,
		color: COLORS.SECONDARY,
	},
	[QUOTE]: {
		fontSize: 20,
		fontStyle: 'italic',
		color: COLORS.SECONDARY,
	},
	[LARGE_BODY]: {
		fontSize: 16,
		fontWeight: 'bold',
		color: COLORS.SECONDARY,
	},
	[BODY]: {
		fontSize: 16,
		color: COLORS.SECONDARY,
	},
	[SECONDARY_BODY]: {
		fontSize: 14,
		color: COLORS.GRAY,
	},
	[PLACEHOLDER]: {
		fontSize: 14,
		fontStyle: 'italic',
		color: COLORS.GRAY,
	},
	[BUTTON]: {
		fontSize: 14,
		fontWeight: 'bold',
		color: COLORS.SECONDARY,
	},
});

export default styles;
