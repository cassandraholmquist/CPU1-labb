import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import FetchButton from "./FetchButton";
import TextValue from "./TextValue";

const HomeScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TextValue text="Have you tried this one?" />
				<FetchButton />
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
	header: {
		fontSize: 18,
	},
});
