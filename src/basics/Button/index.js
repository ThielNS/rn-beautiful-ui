import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Text from '../Text';

import styles from './styles';
import { BUTTON_SIZES, BUTTON_TYPES } from './constants';
import { TEXT_TYPES } from '../Text/constants';
import COLORS from '../../utils/colors';
import { ICON_SIZES } from '../Icon/constants';

const Button = ({
	title,
	icon,
	type,
	outline,
	style,
	active,
	circle,
	size,
	onPress,
}) => (
	<TouchableOpacity
		style={[
			styles.buttonType(type),
			styles.buttonOutline(outline),
			styles.buttonCircle(circle, size, type),
			styles.buttonActive(active, type),
			style,
		]}
		activeOpacity={0.7}
		onPress={onPress}
	>
		{!!icon && (
			<Icon
				color={
					active
						? COLORS.PRIMARY
						: type !== BUTTON_TYPES.LINK && type !== BUTTON_TYPES.LIGHT
							? COLORS.WHITE
							: COLORS.SECONDARY
				}
				size={circle ? ICON_SIZES[size] : ICON_SIZES.SMALL}
				style={!circle ? styles.buttonIcon : {}}
				{...icon}
			/>
		)}
		{!!title && (
			<Text
				type={type === BUTTON_TYPES.LINK ? TEXT_TYPES.BODY : TEXT_TYPES.BUTTON}
				style={
					type !== BUTTON_TYPES.LINK
						? styles.buttonText
						: active
							? { color: COLORS.PRIMARY }
							: {}
				}
			>
				{title}
			</Text>
		)}
	</TouchableOpacity>
);

Button.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	icon: PropTypes.object,
	type: PropTypes.string,
	outline: PropTypes.bool,
	active: PropTypes.bool,
	circle: PropTypes.bool,
	size: PropTypes.string,
	onPress: PropTypes.func,
};

Button.defaultProps = {
	type: BUTTON_TYPES.LINK,
	active: false,
	outline: false,
	circle: false,
	size: BUTTON_SIZES.MEDIUM,
};

export default Button;
