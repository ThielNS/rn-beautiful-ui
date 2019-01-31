import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Row = ({
	children,
	flex,
	direction,
	justify,
	align,
	style,
	...props
}) => (
	<View
		style={[
			{
				flex,
				flexDirection: direction,
				justifyContent: justify,
				alignItems: align,
			},
			style,
		]}
		{...props}
	>
		{children}
	</View>
);

Row.propTypes = {
	children: PropTypes.node,
	flex: PropTypes.number,
	direction: PropTypes.string,
	justify: PropTypes.string,
	align: PropTypes.string,
};

Row.defaultProps = {
	flex: 0,
	direction: 'row',
	justify: 'flex-start',
	align: 'flex-start',
};

export default Row;
