import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fingers crossed!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


// View, Text, Image, Pressable (eller liknande), ScrollView (eller FlatList)
// 3 egna komponenter varav minst en med props och minst en av dessa props ska vara en funktion (callback)
// Använd dig av Context för att skicka ner viss data till komponenter utan att använda props. 