import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

const TextValue = ({ text }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<View style={styles.container}>
			<Text style={[(styles.text, styles[`text${theme}`])]}>{text}</Text>
		</View>
	);
};

export default TextValue;

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	text: {
		color: "black",
	},
	textDark: {
		color: "snow",
	},
});
