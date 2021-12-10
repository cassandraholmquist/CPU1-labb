import React from "react";
import { StyleSheet } from "react-native";

import HomeScreen from "./src/components/HomeScreen";
import ToggleButton from "./src/components/ToggleButton";
import Container from "./src/styles/Container";

import { ThemeContextProvider } from "./src/contexts/ThemeContext";

function App() {
	return (
		<ThemeContextProvider>
			<Container>
				<ToggleButton />
				<HomeScreen />
			</Container>
		</ThemeContextProvider>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
});

// TODO
// View, Text, Image, Pressable (eller liknande), ScrollView (eller FlatList)
// 3 egna komponenter varav minst en med props och minst en av dessa props ska vara en funktion (callback)
// Använd dig av Context för att skicka ner viss data till komponenter utan att använda props.
// https://api.punkapi.com/v2/beers
