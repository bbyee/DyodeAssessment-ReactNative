import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import heroImage1 from "./assets/HeroImage1Mobile.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.announcement}>
        FREE SHIPPING ON ALL ORDERS OVER $75
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Womens</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Mens</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Accessories</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Sale!</Text>
        </TouchableOpacity>
      </View>

      <Image source={heroImage1} style={styles.hero} />
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
  hero: {
    marginBottom: 10,
    alignSelf: "stretch",
  },
  announcement: {
    height: 35,
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    alignSelf: "stretch",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    backgroundColor: "#265248",
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#265248",
  },
});
