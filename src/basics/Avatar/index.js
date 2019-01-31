import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { AVATAR_TYPES } from './constants';

const Avatar = ({ source, size, style }) => (
	<View style={[style, styles.avatarContainer, styles[`SIZE_${size}`]]}>
		<Image source={source} style={styles.avatarImage} />
	</View>
);

Avatar.propTypes = {
	source: PropTypes.object.isRequired,
	size: PropTypes.string,
};

Avatar.defaultProps = {
	size: AVATAR_TYPES.DEFAULT,
};

export default Avatar;
