import React, { Component } from 'react';
import {
	View, Image, Animated, Easing,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Card extends Component {
	state = {
		loadingAnim: new Animated.Value(1),
	};

	componentDidMount() {
		this.loadingAnimate();
	}

	loadingAnimate = () => {
		Animated.sequence([
			Animated.timing(this.state.loadingAnim, {
				duration: 2000,
				toValue: 0.4,
				easing: Easing.linear,
			}),
			Animated.timing(this.state.loadingAnim, {
				duration: 2000,
				toValue: 1,
				easing: Easing.linear,
			}),
		]).start(() => this.loadingAnimate());
	};

	renderLoading = (width, marginBottom) => (
		<Animated.View
			style={[
				styles.loadingContainer,
				{
					opacity: this.state.loadingAnim,
					marginBottom,
					width: `${width}%`,
				},
			]}
		/>
	);

	render() {
		const {
			children,
			style,
			cover,
			header,
			actions,
			pullAction,
			loading,
			coverStyle,
		} = this.props;
		return (
			<View style={[styles.cardContainer, style]}>
				{!loading && cover && (
					<View style={[styles.cardCover, coverStyle]}>
						<Image style={styles.cardCoverImage} source={{ uri: cover }} />
					</View>
				)}
				{!loading && header && <View style={styles.cardHeader}>{header}</View>}
				{!loading && children && (
					<View style={styles.cardContent}>{children}</View>
				)}
				{loading && (
					<View style={styles.cardContent}>
						{this.renderLoading(50, 24)}
						{this.renderLoading(100, 10)}
						{this.renderLoading(90, 10)}
						{this.renderLoading(95, 24)}
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							{this.renderLoading(40)}
							{this.renderLoading(20)}
						</View>
					</View>
				)}
				{!loading && actions && (
					<View
						style={
							children
								? styles.cardActions
								: [styles.cardActions, styles.marginTop]
						}
					>
						{actions.map((ActionComponent, index, array) => (
							<View
								key={index}
								style={
									pullAction && array.length - 1 === index
										? styles.actionPullRight
										: styles.actionItem
								}
							>
								{ActionComponent}
							</View>
						))}
					</View>
				)}
			</View>
		);
	}
}

Card.propTypes = {
	children: PropTypes.node,
	header: PropTypes.element,
	actions: PropTypes.arrayOf(PropTypes.element),
	cover: PropTypes.string,
	coverStyle: PropTypes.object,
	pullAction: PropTypes.bool,
	loading: PropTypes.bool,
};

Card.defaultProps = {
	loading: false,
	pullAction: true,
};

export default Card;
