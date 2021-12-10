import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Title from "./Title";
import Button from "./Button";

import { ThemeContext } from "../contexts/ThemeContext";

const HomeScreen = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Title text="Have you tried this one?" />
				<Button />
			</View>
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
	text: {
		color: "#000",
	},
	textDark: {
		color: "snow",
	},
});
