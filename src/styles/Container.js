import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	containerLight: {
		backgroundColor: "#FFF",
	},
	containerDark: {
		backgroundColor: "#212121",
	},
});

export default ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<View style={[styles.container, styles[`container${theme}`]]}>
			{children}
		</View>
	);
};
