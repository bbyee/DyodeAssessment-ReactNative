import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import heroImage1 from "./assets/HeroImage1Mobile.jpg";
import logo from "./assets/Logo.png";
import WomensImageTile1 from "./assets/WomensImage.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.announcement}>
        FREE SHIPPING ON ALL ORDERS OVER $75
      </Text>

      <View style={styles.buttonContainer}>
        <Image source={logo} style={styles.buttonText} />
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

      <Image source={heroImage1} style={styles.heroImage} />

      <View
        style={{
          position: "absolute",
          top: 200,
          left: 0,
          right: 270,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text style={styles.heroOverlayButtonText}>SHOP NOW</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          top: 80,
          left: 20,
          right: 270,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.heroOverlayTextUpper}>Title Goes Here</Text>
      </View>

      <View
        style={{
          position: "absolute",
          top: 135,
          left: 20,
          right: 270,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.heroOverlayTextLower}>
          Tagline will go right here
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image source={WomensImageTile1} style={styles.tileButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={WomensImageTile1} style={styles.tileButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={WomensImageTile1} style={styles.tileButton} />
        </TouchableOpacity>
      </View>
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
  heroImage: {
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
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

  heroOverlayButtonText: {
    backgroundColor: "black",
    color: "white",
    margin: 5,
    padding: 6,
    fontSize: 8,
  },
  heroOverlayTextUpper: {
    color: "white",
    fontSize: 15,
  },
  heroOverlayTextLower: {
    color: "white",
    fontSize: 10,
  },

  tileButton: {
    width: 90,
    height: 90,
    margin: 10,
    justifyContent: "space-around",
  },
});
