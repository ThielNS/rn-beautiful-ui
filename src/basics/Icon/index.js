import React from 'react';
import { Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import COLORS from '../../utils/colors';

import styles from './styles';

const Icon = ({
	name, circle, circleBackgroundColor, ...props
}) => (
	<View
		style={
			circle
				? [styles.iconCircle, { backgroundColor: circleBackgroundColor }]
				: null
		}
	>
		<Ionicons
			size={24}
			color={COLORS.SECONDARY}
			name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`}
			{...props}
		/>
	</View>
);

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	prefix: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
	circle: PropTypes.bool,
	backgroundColor: PropTypes.string,
};

Icon.defaultProps = {
	size: 20,
	circle: false,
	circleBackgroundColor: COLORS.GRAY_LIGHT,
};

export default Icon;
