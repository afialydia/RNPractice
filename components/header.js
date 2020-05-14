import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 70,
		paddingTop: 30,
		backgroundColor: colors.accent,
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		color: colors.primary,
		fontSize: 18,
	},
});

export default Header;