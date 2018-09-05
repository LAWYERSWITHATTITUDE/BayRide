var React = require('react-native');

var {
	StyleSheet,
} = React;

module.exports = StyleSheet.create({
	containerMain: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'transparent',
		flex: 1
	},
	picker: {
		backgroundColor: 'white',
		width: 300,
		height: 215,
	},
	submissionForm: {
		flex: 1,
		margin: 20,
		marginTop: 50,
		alignItems: 'center'
	},
	lotMain: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'black'
	},
	scrollviewMain: {
		alignItems: 'center',
	},
	mapMain: {
		zIndex: -1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flex: 1,
	},
	buttonMain: {
		zIndex: 10,
		top: 70
	},
	matchMain: {
		zIndex: 20,
		top: 80
	},
	button: {
		margin: 20,
		marginTop: 50,
	},
	backButton: {
		marginTop: 'auto'
	},

	callDrawerContainer: {
		padding: 25
	},

	banner: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#b0e0e6',
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerRow: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	welcomeButton: {
		width: 150,
		backgroundColor: 'teal',
		borderWidth: 1,
		borderRadius: 5,
		padding: 2,
	},
	signUp: {
		width: 150,
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 5,
		padding: 2,
	},
	title: {
		fontSize: 75,
		fontWeight: 'bold',
		width: 500,
		backgroundColor: '#b0e0e6',
		textAlign: 'center',
		color: 'teal',
		top: 70
	},
	logo: {
		width: 400,
		height: 300,
		margin: 50,
	},
	/**
	 * Styling for DriverHome
	 */
	lotBanner: {
		display: 'flex',
		flex: 1,
		// flexDirection: 'row',
		// justifyContent: 'space-around',
		// alignItems: 'center',
		// alignContent: 'space-around',
	},
	lotBannerButton: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignContent: 'space-around',
	},
	horizontalRule: {
		marginLeft: 15,
		marginRight: 15,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	/**
	 * Styling for the drawer
	 */
	drawerIcon: {
		marginTop: 24,
		marginLeft: 18
	}
});
