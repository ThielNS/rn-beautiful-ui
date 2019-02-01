import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const LoadingComponent = ({
	padder, padderHorizontal, padderVertical, style, children, ...restProps
}) => {
	const padderStyle = padder ? { padding: padder }
		: padderHorizontal ? { paddingHorizontal: padderHorizontal }
			: padderVertical ? { paddingVertical: padderVertical }
				: {};
	return (
		<View
			style={[padderStyle, style]}
			{...restProps}
		>
			{children}
		</View>
	);
};

LoadingComponent.propTypes = {
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

LoadingComponent.defaultProps = {
	children: null,
};

export default LoadingComponent;
