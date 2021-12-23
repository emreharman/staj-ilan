import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../utils/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const Error = ({ errorMessage }) => {
  return (
    <View style={styles.errorContainer}>
      <Ionicons name="close-circle" color={Colors.errorText} size={32} />
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  errorText: {
    color: Colors.errorText,
    fontSize: 16,
    textAlign: "center",
  },
});
export default Error;
