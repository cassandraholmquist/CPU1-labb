import axios from "axios";
import React, { useContext, useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

const Button = () => {
	const { theme } = useContext(ThemeContext);

	const [serverResponse, setServerResponse] = useState();

	const API_URL = "https://api.punkapi.com/v2/beers/random";

	const fetchData = async () => {
		try {
			const response = await axios.get(API_URL);
			setServerResponse(response);

			console.log("Button pressed");
			console.log({ response });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View>
			<TouchableOpacity
				style={[styles.button, styles[`button${theme}`]]}
				onPress={fetchData}
				activeOpacity={0.5}
			>
				<Text style={[styles.text, styles[`text${theme}`]]}>Hit me!</Text>
			</TouchableOpacity>

			<View>
				<Text>{serverResponse?.data[0].name}</Text>
				<Image
					source={{
						uri: serverResponse?.data[0].image_url,
						height: 200,
						width: 200,
					}}
				/>
			</View>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		padding: 10,
		margin: 10,
		borderRadius: 20,
		cursor: "pointer",
		backgroundColor: "sienna",
	},
	buttonDark: {
		backgroundColor: "sandybrown",
	},
	text: {
		color: "white",
	},
	textDark: {
		color: "black",
	},
});
