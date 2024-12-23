import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Dashboard({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F5F8FF"} />
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/openDrawer.png")}
            style={styles.openDrawerImage}
          />
        </View>
        <Text style={styles.headingText}>Dashboard</Text>
        <TouchableOpacity style={styles.TotalEmployeeContainer}>
          <Image
            source={require("../assets/images/men.png")}
            style={styles.openDrawerImage}
          />
          <Text />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
  },
  innerContainer: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#F5F8FF",
  },
  header: {
    width: "100%",
  },
  openDrawerImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  headingText: {
    fontSize: 31,
    fontWeight: "bold",
    marginTop: "10%",
  },
  TotalEmployeeContainer: {
    width: "100%",
    height: 84,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    marginTop: "10%",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
