import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const NumberContainer = (props) => {
	return (
		<View style={styles.numContainer}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	numContainer: {
		borderWidth: 2,
		borderColor: colors.accent,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
	},
	number: {
		color: colors.accent,
        fontSize: 22,
        textAlign: 'center'
	},
});

export default NumberContainer;
