import { StyleSheet, Platform } from 'react-native';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 5,
		...Platform.select({
			ios: {
				shadowOpacity: 0.16,
				shadowOffset: {
					width: 0,
					height: 3,
				},
			},
			android: {
				elevation: 2.5,
			},
		}),
	},
	cardContent: {
		padding: 24,
	},
	cardCover: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		overflow: 'hidden',
		height: 250,
		backgroundColor: '#f4f4f4',
	},
	cardCoverImage: {
		flex: 1,
		resizeMode: 'cover',
	},
	cardHeader: {
		marginTop: 24,
		marginHorizontal: 24,
	},
	cardActions: {
		flexDirection: 'row',
		marginHorizontal: 24,
		marginBottom: 24,
	},
	actionItem: {
		marginRight: 24,
	},
	actionPullRight: {
		marginLeft: 'auto',
	},
	marginTop: {
		marginTop: 24,
	},
	loadingContainer: {
		backgroundColor: COLORS.PRIMARY_LIGHT,
		padding: 10,
	},
});

export default styles;
