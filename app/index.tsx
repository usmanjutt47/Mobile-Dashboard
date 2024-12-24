import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import BarChart from "@/components/BarChat";
import PieChartPro from "@/components/PieChartPro";

const { width, height } = Dimensions.get("window");

export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F5F8FF"} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Image
              source={require("../assets/images/openDrawer.png")}
              style={styles.openDrawerImage}
            />
          </TouchableOpacity>

          <Text style={styles.headingText}>Dashboard</Text>
          <TouchableOpacity style={styles.TotalEmployeeContainer}>
            <View style={styles.TotalEmployeeInnerContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/images/men.png")}
                  style={styles.TotalEmployeeImage}
                />
                <Text style={styles.employeeText}>Total Employees</Text>
              </View>
              <Text style={styles.employeeTextPrice}>6.6k</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TotalApplicationContainer}>
            <View style={styles.TotalEmployeeInnerContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/images/applications.png")}
                  style={styles.TotalEmployeeImage}
                />
                <Text style={styles.applicationText}>Leave Applications</Text>
              </View>
              <Text style={styles.applicationTextPrice}>114</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: height * 0.01 }}>
            <BarChart />
          </View>
          <View style={{ marginTop: height * 0.01 }}>
            <PieChartPro />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: "5%",
  },
  innerContainer: {
    width: "90%",
    backgroundColor: "#F5F8FF",
    alignSelf: "center",
  },
  header: {
    width: "100%",
    alignItems: "flex-start",
  },
  openDrawerImage: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: "contain",
  },
  headingText: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    marginTop: height * 0.02,
  },
  TotalEmployeeContainer: {
    width: "100%",
    height: height * 0.1,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    marginTop: height * 0.03,
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  TotalEmployeeImage: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: "contain",
  },
  TotalEmployeeInnerContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  employeeText: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    marginLeft: "3%",
  },
  employeeTextPrice: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#624AB3",
  },
  TotalApplicationContainer: {
    width: "100%",
    height: height * 0.1,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    marginTop: height * 0.01,
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  applicationText: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    marginLeft: "3%",
  },
  applicationTextPrice: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FF7648",
  },
});
