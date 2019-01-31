import React from 'react';
import { View, SectionList as SectionListCustom } from 'react-native';
import PropTypes from 'prop-types';
import Row from '../Row';
import COLORS from '../../utils/colors';
import Text from '../Text';

const SectionList = ({ data, style, ...props }) => (
	<SectionListCustom
		style={[style]}
		sections={data}
		renderItem={({ item, index, section: { data } }) => {
			const borderBottom =				data.length - 1 !== index
				? { borderBottomWidth: 1, borderColor: COLORS.GRAY_LIGHT }
				: null;
			return (
				<Row style={{ paddingVertical: 15, ...borderBottom }} align="center">
					{!!item.left && <View>{item.left}</View>}
					{!!item.body && (
						<View style={item.left ? { marginLeft: 15 } : null}>
							{item.body}
						</View>
					)}
					{!!item.right && (
						<View style={{ marginLeft: 'auto' }}>{item.right}</View>
					)}
				</Row>
			);
		}}
		renderSectionHeader={({ section: { title } }) => (
			<Text type="SECOND_BODY" color={COLORS.SECONDARY}>
				{title}
			</Text>
		)}
		keyExtractor={(item, index) => index.toString()}
		{...props}
	/>
);

SectionList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			data: PropTypes.array.isRequired,
		})
	).isRequired,
};

// SectionList.defaultProps = {
// };

export default SectionList;
