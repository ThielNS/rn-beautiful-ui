import React from 'react';
import { Text as CustomText } from 'react-native';
import PropTypes from 'prop-types';
import { TEXT_TYPES } from './constants';

import styles from './styles';
import COLORS from '../../utils/colors';

const Text = ({
	children, type, align, uppercase, color, style, ...props
}) => (
	<CustomText
		style={[styles[type], { textAlign: align, color }, style]}
		{...props}
	>
		{uppercase ? children.toUpperCase() : children}
	</CustomText>
);

Text.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	type: PropTypes.string,
	align: PropTypes.string,
	uppercase: PropTypes.bool,
	color: PropTypes.string,
};

Text.defaultProps = {
	type: TEXT_TYPES.BODY,
	align: 'left',
	uppercase: false,
	color: COLORS.SECONDARY,
};

export default Text;
