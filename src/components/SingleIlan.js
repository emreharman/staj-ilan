import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../utils/Colors";

const SingleIlan = ({ ilan }) => {
  return (
    <View style={styles.ilanContainer}>
      <View style={styles.ilanTop}>
        <Text>{ilan.sirket}</Text>
        <Text>{ilan.pozisyon}</Text>
        <Text>{ilan.ilanSahibi}</Text>
      </View>
      <View style={styles.ilanBottom}>
        <Text>{ilan.aciklama}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ilanContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary1,
    marginTop: 20,
  },
  ilanTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary1,
    padding: 10,
  },
  ilanTopText: {
    padding: 10,
  },
  ilanBottom: {
    padding: 10,
  },
});
export default SingleIlan;
