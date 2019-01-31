import { StyleSheet } from 'react-native';
import COLORS from '../../utils/colors';
import { BUTTON_SIZES, BUTTON_TYPES } from './constants';

const buttonContainerStyle = {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
};

const buttonCircleContainer = (size) => ({
	...buttonContainerStyle,
	width: size,
	height: size,
	borderRadius: size / 2,
	padding: 0,
});

const buttonPadding = {
	padding: 10,
	paddingLeft: 15,
	paddingRight: 15,
};

const borderRadius = 30;

const stylesType = (type) => {
	switch (type) {
		case BUTTON_TYPES.LINK:
			return {
				flexDirection: 'row',
				alignItems: 'center',
			};
		case BUTTON_TYPES.PRIMARY:
			return {
				...buttonContainerStyle,
				borderRadius,
				backgroundColor: COLORS.PRIMARY,
				borderColor: COLORS.PRIMARY,
			};
		case BUTTON_TYPES.LIGHT:
			return {
				...buttonContainerStyle,
				borderRadius,
				backgroundColor: COLORS.LIGHT,
				borderColor: COLORS.LIGHT,
			};
		default:
			return {};
	}
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconLight: {
		color: COLORS.WHITE,
	},
	iconDark: {
		color: COLORS.SECONDARY,
	},
	iconPrimary: {
		color: COLORS.PRIMARY,
	},
	buttonType: (type) => {
		switch (type) {
			case BUTTON_TYPES.LINK:
				return {
					flexDirection: 'row',
					alignItems: 'center',
				};
			case BUTTON_TYPES.PRIMARY:
				return {
					...buttonContainerStyle,
					...buttonPadding,
					borderRadius,
					backgroundColor: COLORS.PRIMARY,
					borderColor: COLORS.PRIMARY,
				};
			case BUTTON_TYPES.LIGHT:
				return {
					...buttonContainerStyle,
					...buttonPadding,
					borderRadius,
					backgroundColor: COLORS.LIGHT,
					borderColor: COLORS.LIGHT,
				};
			default:
				return {};
		}
	},
	buttonOutline: (isOutline, type) => isOutline
		? {
			backgroundColor: 'transparent',
			borderWidth: 2,
			borderColor:
						type !== BUTTON_TYPES.LIGHT ? COLORS.WHITE : COLORS.SECONDARY,
			  }
		: {},
	buttonCircle: (isCircle, size, type) => {
		if (isCircle) {
			switch (size) {
				case BUTTON_SIZES.SMALL:
					return { ...buttonCircleContainer(20), ...stylesType(type) };
				case BUTTON_SIZES.MEDIUM:
					return { ...buttonCircleContainer(40), ...stylesType(type) };
				case BUTTON_SIZES.LARGE:
					return buttonCircleContainer(60);
				default:
					return {};
			}
		}
		return {};
	},
	buttonActive: (isActive, type) => {
		if (isActive) {
			return {
				...stylesType(type),
				backgroundColor:
					type !== BUTTON_TYPES.LINK ? COLORS.LIGHT : 'transparent',
			};
		}
		return {};
	},
	buttonText: {
		color: COLORS.WHITE,
	},
	buttonIcon: {
		marginRight: 10,
	},
});

export default styles;
