import React from 'react';
import PropTypes from 'prop-types';
import { View as RNView } from 'react-native';

const View = ({
	padder, padderHorizontal, padderVertical, style, children, ...restProps
}) => {
	const padderStyle = padder ? { padding: padder }
		: padderHorizontal ? { paddingHorizontal: padderHorizontal }
			: padderVertical ? { paddingVertical: padderVertical }
				: {};
	return (
		<RNView
			style={[padderStyle, style]}
			{...restProps}
		>
			{children}
		</RNView>
	);
};

View.propTypes = {
	padder: PropTypes.number,
	padderVertical: PropTypes.number,
	padderHorizontal: PropTypes.number,
	style: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.array,
		PropTypes.object,
	]),
	children: PropTypes.node,
};

View.defaultProps = {
	children: null,
};

export default View;
