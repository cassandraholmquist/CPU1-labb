import React, { useContext } from "react";
import { StyleSheet, Text, Pressable } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

const ToggleButton = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const { theme } = useContext(ThemeContext);

	return (
		<Pressable onPress={() => toggleTheme()} style={styles.button}>
			<Text style={styles.buttonText}>
				{theme === "Dark" ? "Light mode" : "Dark mode"}
			</Text>
		</Pressable>
	);
};

export default ToggleButton;

const styles = StyleSheet.create({
	button: {
		margin: 10,
		padding: 10,
		borderColor: "grey",
		borderWidth: 2,
		borderRadius: 20,
		backgroundColor: "snow",
		alignSelf: "flex-end",
	},
	buttonText: {
		fontSize: 10,
	},
});
