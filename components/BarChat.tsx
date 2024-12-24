import { View, StyleSheet, Text, Dimensions } from "react-native";
import React from "react";
import { BarChart as ChartKitBarChart } from "react-native-gifted-charts";

const { width } = Dimensions.get("window");

const data = [
  { value: Math.random() * 5 + 5, label: "5" },
  { value: Math.random() * 5 + 5, label: "6" },
  { value: Math.random() * 5 + 5, label: "7" },
  { value: Math.random() * 5 + 5, label: "8" },
  { value: Math.random() * 5 + 5, label: "9" },
  { value: Math.random() * 5 + 5, label: "10" },
  { value: Math.random() * 5 + 5, label: "11" },
  { value: Math.random() * 5 + 5, label: "12" },
  { value: Math.random() * 5 + 5, label: "13" },
  { value: Math.random() * 5 + 5, label: "14" },
  { value: Math.random() * 5 + 5, label: "15" },
];

const yAxisLabelTexts = ["5", "6", "7", "8", "9", "10"];

export default function BarChart() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignSelf: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Working Hours Chart</Text>
        <View
          style={{
            height: 40,
            width: 80,
            backgroundColor: "#FFF7F4",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            paddingLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.month}>March</Text>
        </View>
      </View>
      <ChartKitBarChart
        data={data}
        width={width}
        height={247}
        barWidth={10}
        barBorderTopRightRadius={20}
        barBorderTopLeftRadius={20}
        frontColor="#FF7648"
        yAxisThickness={0}
        xAxisThickness={0}
        spacing={16}
        yAxisLabelTexts={yAxisLabelTexts}
        hideRules={true}
        yAxisTextStyle={{
          color: "#8F9198",
          fontSize: 11,
        }}
        xAxisLabelTextStyle={{
          color: "#8F9198",
          fontSize: 11,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    borderRadius: 23,
    paddingBottom: 10,
    paddingTop: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
    width: "40%",
    paddingLeft: 12,
  },
  month: {
    color: "#FF7648",
    fontSize: 15,
    fontWeight: "bold",
  },
});
