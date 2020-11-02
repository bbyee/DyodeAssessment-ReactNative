import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import heroImage1 from "./assets/HeroImage1Mobile.jpg";
import logo from "./assets/Logo.png";
import WomensImageTile1 from "./assets/WomensImage.jpg";
import MensImageTile1 from "./assets/MensImage1.jpg";
import AccessoriesImageTile1 from "./assets/AccessoriesImageMobile1.jpg";
import ProductImage1 from "./assets/ProductImage1.jpg";
import HeroImage2Mobile from "./assets/HeroImage2Mobile.jpg";
import Hero from "react-native-hero";

const carouselData = [
  {
    title: "Product Title",
    description: "Women's T-Shirt",
    price: "19.99",
  },
  {
    title: "Product Title",
    description: "Women's T-Shirt",
    price: "19.99",
  },
  {
    title: "Product Title",
    description: "Women's T-Shirt",
    price: "19.99",
  },
];

const Item = ({ title, description, price }) => (
  <View style={styles.item}>
    <Image
      source={ProductImage1}
      style={{
        height: 100,
        aspectRatio: 1,
      }}
    />
    <Text style={styles.carouselTitle}>{title}</Text>
    <Text style={styles.carouselDesc}>{description}</Text>
    <Text style={styles.carouselPrice}>{price}</Text>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      description={item.description}
      price={item.price}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.announcement}>
        FREE SHIPPING ON ALL ORDERS OVER $75
      </Text>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <Image source={logo} style={styles.buttonContainer} />
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
            top: 60,
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
            top: -100,
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
            top: -30,
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

        <View style={styles.tileContainer}>
          <TouchableOpacity>
            <Image source={WomensImageTile1} style={styles.tileButton} />
            <Text style={styles.tileButtonText}>Womens</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={MensImageTile1} style={styles.tileButton} />
            <Text style={styles.tileButtonText}>Mens</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={AccessoriesImageTile1} style={styles.tileButton} />
            <Text style={styles.tileButtonText}>Accessories</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.newArrivals}>New Arrivals</Text>

        <FlatList
          data={carouselData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={styles.FlatList}
        />

        <Hero
          source={HeroImage2Mobile}
          renderOverlay={() => (
            <View>
              <Text style={styles.RNHeroText1}>Title Goes Here</Text>
              <Text style={styles.RNHeroText2}>Tagline will go right here</Text>
              <TouchableOpacity>
                <Text style={styles.RNHeroButton}>SHOP NOW</Text>
              </TouchableOpacity>
            </View>
          )}
          style={styles.RNHero}
        />
      </ScrollView>
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
    margin: 5,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#10504F",
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
    margin: 15,
    marginBottom: 0,
    justifyContent: "space-around",
  },

  tileButtonText: {
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "#10504F",
    textAlign: "center",
    color: "white",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    height: 40,
    padding: 6,
    fontSize: 15,
  },

  tileContainer: {
    flexDirection: "row",
  },

  newArrivals: {
    color: "black",
    fontSize: 20,
    margin: 15,
    textAlign: "center",
  },

  item: {
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    margin: 6,
  },

  carouselPrice: {
    color: "#10504F",
  },
  carouselTitle: {
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  carouselDesc: {
    color: "black",
    marginBottom: 20,
  },

  FlatList: {
    alignSelf: "center",
    alignContent: "center",
  },

  RNHero: {
    alignSelf: "stretch",
    marginTop: 25,
  },

  RNHeroText1: {
    color: "white",
    fontSize: 15,
    marginTop: 100,
    marginLeft: 240,
  },
  RNHeroText2: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginLeft: 240,
  },

  RNHeroButton: {
    color: "white",
    backgroundColor: "#10504F",
    alignSelf: "center",
    marginLeft: 240,
    marginBottom: 50,
    padding: 5,
  },
});
