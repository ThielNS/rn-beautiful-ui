import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const LoadingComponent = ({ isLoading, children }) => isLoading ? (
	<Card loading={isLoading} />
) : children;

LoadingComponent.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	children: PropTypes.node,
};

LoadingComponent.defaultProps = {
	children: null,
};

export default LoadingComponent;
