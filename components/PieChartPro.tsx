import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";

export default function PieChartPro() {
  const data = [
    { value: 30, label: "Absent", color: "#3E288B" },
    { value: 20, label: "Leave", color: "#1E1E1E" },
    { value: 50, label: "Present", color: "#FF7648" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Attendance</Text>
        <View style={styles.monthContainer}>
          <Text style={styles.month}>March</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          donut
          innerCircleBorderWidth={10}
          innerCircleBorderColor="#FFFFFF"
        />
        <View style={{ marginLeft: "5%", marginTop: "5%" }}>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ color: "#8F9198" }}>Present</Text>
            <Text
              style={{
                fontSize: 21,
                color: "#FF7648",
                fontWeight: "bold",
                marginBottom: "5%",
              }}
            >
              356
            </Text>
          </View>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ color: "#8F9198" }}>Absent</Text>
            <Text
              style={{
                fontSize: 21,
                color: "#3E288B",
                fontWeight: "bold",
                marginBottom: "5%",
              }}
            >
              56
            </Text>
          </View>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ color: "#8F9198" }}>Leave</Text>
            <Text
              style={{
                fontSize: 21,
                color: "#1E1E1E",
                fontWeight: "bold",
                marginBottom: "5%",
              }}
            >
              6
            </Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColorBox, { backgroundColor: "#FF7648" }]}
            />
            <Text>Present</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColorBox, { backgroundColor: "#3E288B" }]}
            />
            <Text>Absent</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColorBox, { backgroundColor: "#1E1E1E" }]}
            />
            <Text>Leave</Text>
          </View>
        </View>
      </View>
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
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
    width: "40%",
    paddingLeft: 12,
  },
  monthContainer: {
    height: 40,
    width: 80,
    backgroundColor: "#FFF7F4",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingLeft: 10,
    justifyContent: "center",
  },
  month: {
    color: "#FF7648",
    fontSize: 15,
    fontWeight: "bold",
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  legendContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: "5%",
  },
  legendItem: {
    flexDirection: "row",
    gap: 5,
  },
  legendColorBox: {
    height: 20,
    width: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});
