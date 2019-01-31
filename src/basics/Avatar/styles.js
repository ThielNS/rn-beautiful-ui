import { StyleSheet } from 'react-native';
import COLORS from '../../utils/colors';
import { AVATAR_SIZES, AVATAR_TYPES } from './constants';

const styles = StyleSheet.create({
	avatarContainer: {
		overflow: 'hidden',
		backgroundColor: COLORS.GRAY,
	},
	avatarCenterContent: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatarImage: {
		flex: 1,
		resizeMode: 'cover',
	},
	[`SIZE_${AVATAR_TYPES.SMALL}`]: {
		width: AVATAR_SIZES.SMALL,
		height: AVATAR_SIZES.SMALL,
		borderRadius: AVATAR_SIZES.SMALL / 2,
	},
	[`SIZE_${AVATAR_TYPES.DEFAULT}`]: {
		width: AVATAR_SIZES.DEFAULT,
		height: AVATAR_SIZES.DEFAULT,
		borderRadius: AVATAR_SIZES.DEFAULT / 2,
	},
	[`SIZE_${AVATAR_TYPES.LARGE}`]: {
		width: AVATAR_SIZES.LARGE,
		height: AVATAR_SIZES.LARGE,
		borderRadius: AVATAR_SIZES.LARGE / 2,
	},
});

export default styles;
