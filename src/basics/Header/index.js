import React, { Component } from 'react';
import { Header as HeaderCustom } from 'react-navigation';
import { Animated, ScrollView } from 'react-native';
// import  PropTypes from 'prop-types';

class Header extends Component {
	state = {
		scrollY: new Animated.Value(1),
	};

	componentDidUpdate() {}

	render() {
		const { scrollY } = this.state;
		return (
			<Animated.View
				style={{
					opacity: scrollY.interpolate({
						inputRange: [0, 20],
						outputRange: [1, 0],
					}),
				}}
			>
				<HeaderCustom {...this.props} />
			</Animated.View>
		);
	}
}

// Header.propTypes = {
// };
//
// Header.defaultProps = {
// };

export default Header;
