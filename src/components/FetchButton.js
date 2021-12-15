import axios from "axios";
import configData from "../../config.json";
import React, { useContext, useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import TextValue from "./TextValue";

import { ThemeContext } from "../contexts/ThemeContext";

const FetchButton = () => {
	const { theme } = useContext(ThemeContext);

	const [serverResponse, setServerResponse] = useState();

	const apiKey = configData.API_KEY;

	const fetchData = async () => {
		try {
			const response = await axios.get(apiKey);
			setServerResponse(response);
		} catch (error) {
			console.log(error);
		}
	};

	const displayData = () => {
		if (serverResponse) {
			return (
				<View alignContent="center">
					<View style={styles.imageContainer}>
						<Image
							style={styles.image}
							source={{
								uri: serverResponse?.data[0].image_url,
							}}
						/>
					</View>
					<View>
						<TextValue text={serverResponse?.data[0].name} />
					</View>
				</View>
			);
		}
	};

	return (
		<View>
			<View>
				<TouchableOpacity
					style={[styles.button, styles[`button${theme}`]]}
					onPress={fetchData}
					activeOpacity={0.5}
				>
					<Text style={[styles.buttonText, styles[`buttonText${theme}`]]}>
						Hit me!
					</Text>
				</TouchableOpacity>
			</View>
			{displayData()}
		</View>
	);
};

export default FetchButton;

const styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
		height: 300,
		width: 200,
		marginVertical: 20,
	},
	imageContainer: {
		backgroundColor: "snow",
		flex: 1,
		borderColor: "grey",
		borderWidth: 2,
		borderRadius: 5,
	},
	button: {
		padding: 10,
		margin: 10,
		borderRadius: 20,
		width: 200,
		cursor: "pointer",
		backgroundColor: "sienna",
		alignItems: "center",
	},
	buttonDark: {
		backgroundColor: "sandybrown",
	},
	buttonText: {
		color: "white",
	},
	buttonTextDark: {
		color: "black",
	},
	text: {
		fontSize: 16,
		color: "black",
	},
	textDark: {
		color: "white",
	},
});
