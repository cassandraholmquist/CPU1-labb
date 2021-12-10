import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

const Title = ({ text }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles[`text${theme}`]]}>{text}</Text>
		</View>
	);
};

export default Title;

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	text: {
		color: "black",
		fontSize: 20,
	},
	textDark: {
		color: "snow",
	},
});
