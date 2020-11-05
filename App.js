import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import SocialImage1 from "./assets/Social1.jpg";
import SocialImage2 from "./assets/Social2.jpg";
import SocialImage3 from "./assets/Social3.jpg";
import SocialImage4 from "./assets/Social4.jpg";
import SocialImage5 from "./assets/Social5.jpg";
import EmailIcon from "./assets/EmailIcon.png";
import CollapsibleList from "react-native-collapsible-list";

const carouselData1 = [
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

  //vars for footer sections conditional rendering:
  const buttonPressed = <Text>-</Text>;
  const buttonNotPressed = <Text>+</Text>;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.announcement}>
          FREE SHIPPING ON ALL ORDERS OVER $75
        </Text>
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
        <Hero
          source={heroImage1}
          renderOverlay={() => (
            <View>
              <Text style={styles.RNHeroText1Upper}>Title Goes Here</Text>
              <Text style={styles.RNHeroText1Lower}>
                Tagline will go right here
              </Text>
              <TouchableOpacity>
                <Text style={styles.RNHeroButton1}>SHOP NOW</Text>
              </TouchableOpacity>
            </View>
          )}
          style={styles.RNHero}
        />
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
        <Text style={styles.textHeaders}>New Arrivals</Text>

        <FlatList
          data={carouselData1}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={styles.FlatList}
        />
        <Hero
          source={HeroImage2Mobile}
          renderOverlay={() => (
            <View>
              <Text style={styles.RNHeroText2Upper}>Title Goes Here</Text>
              <Text style={styles.RNHeroText2Lower}>
                Tagline will go right here
              </Text>
              <TouchableOpacity>
                <Text style={styles.RNHeroButton2}>SHOP NOW</Text>
              </TouchableOpacity>
            </View>
          )}
          style={styles.RNHero}
        />
        <Text style={styles.textHeaders}>Follow us on Instagram!</Text>

        <View style={styles.socialTileContainer}>
          <TouchableOpacity>
            <Image source={SocialImage1} style={styles.socialTileButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={SocialImage2} style={styles.socialTileButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={SocialImage3} style={styles.socialTileButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={SocialImage4} style={styles.socialTileButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={SocialImage5} style={styles.socialTileButton} />
          </TouchableOpacity>
        </View>

        <View style={styles.stayConnectedContainer}>
          <Text style={styles.stayConnectedText1}>
            <Image source={EmailIcon} />
            Sign Up &amp; Stay Connected
          </Text>
          <Text style={styles.stayConnectedText2}>
            Sign up for the newsletter and get 20% off! Gain access to exclusive
            offers and be the first to know when new stuff drops!
          </Text>
          <View style={styles.subscribeSection}>
            <TextInput
              style={styles.input}
              placeholder="Your Email Address"
              placeholderTextColor="#888"
              backgroundColor="white"
            ></TextInput>
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.customerServiceSection}>
          <CollapsibleList
            numberOfVisibleItems={0}
            wrapperStyle={styles.wrapperCollapsibleList}
            buttonContent={
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "black",
                }}
              >
                <Text style={styles.CLButtonText}>Customer Service</Text>
                <Text style={styles.CLButtonSymbol}>+</Text>
              </View>
            }
            buttonPosition={"top"}
          >
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Accessibility</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Contact Us</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Return Policy</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>FAQ</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Gift Certificates</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Wishlist</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>About Us</Text>
            </View>
          </CollapsibleList>
        </View>

        <View style={styles.companySection}>
          <CollapsibleList
            numberOfVisibleItems={0}
            wrapperStyle={styles.wrapperCollapsibleList}
            buttonContent={
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "black",
                }}
              >
                <Text style={styles.CLButtonText}>Company</Text>
                <Text style={styles.CLButtonSymbol}>+</Text>
              </View>
            }
            buttonPosition={"top"}
          >
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>About Us </Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Careers </Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Press</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.collapsibleItemText}>Affiliates </Text>
            </View>
          </CollapsibleList>
        </View>
        <View style={styles.Social}></View>
        <Text style={styles.socialMedia}>Follow Us</Text>
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

  textHeaders: {
    color: "black",
    fontSize: 20,
    margin: 15,
    textAlign: "center",
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
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

  RNHeroText2Upper: {
    color: "white",
    fontSize: 15,
    marginTop: 100,
    marginLeft: 240,
  },
  RNHeroText2Lower: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginLeft: 240,
    margin: 10,
  },

  RNHeroButton2: {
    color: "white",
    backgroundColor: "#10504F",
    alignSelf: "center",
    marginLeft: 240,
    marginBottom: 50,
    padding: 5,
  },

  RNHeroText1Upper: {
    color: "white",
    fontSize: 15,
    marginTop: 100,
    marginRight: 240,
  },

  RNHeroText1Lower: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginRight: 240,
    margin: 10,
  },

  RNHeroButton1: {
    color: "white",
    backgroundColor: "#10504F",
    alignSelf: "center",
    marginRight: 240,
    marginBottom: 50,
    padding: 5,
    fontSize: 10,
  },

  socialTileContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  socialTileButton: {
    width: 60,
    height: 60,
    margin: 4,
    marginBottom: 0,
    justifyContent: "space-around",
  },

  stayConnectedContainer: {
    backgroundColor: "#10504F",
  },

  stayConnectedText1: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    height: 60,
    marginBottom: 0,
    fontSize: 20,
  },

  stayConnectedText2: {
    color: "white",
    textAlign: "center",
  },

  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 45,
    width: 200,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  subscribeButton: {
    marginTop: 10,
    borderColor: "white",
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    width: 90,
    height: 45,
    marginLeft: 5,
  },

  subscribeButtonText: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  subscribeSection: {
    flexDirection: "row",
    justifyContent: "center",
  },

  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
  },

  CLButtonText: {
    backgroundColor: "black",
    color: "white",
  },

  collapsibleItemText: {
    color: "white",
  },

  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    padding: 10,
    backgroundColor: "black",
    color: "white",
  },

  customerServiceSection: {
    backgroundColor: "black",
    color: "white",
  },

  companySection: {
    backgroundColor: "black",
    color: "white",
    paddingBottom: 15,
  },

  socialMedia: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    backgroundColor: "black",
    color: "white",
  },

  CLButtonSymbol: {
    color: "white",
    backgroundColor: "black",
  },
});
