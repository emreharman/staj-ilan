import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { auth } from "../db/firestore3";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../utils/Colors";
import { StackActions } from "@react-navigation/native";

const MyProfile = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.dispatch(StackActions.popToTop());
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
      <Text>{auth.currentUser.email}</Text>
      <Pressable style={styles.logout} onPress={handleLogout}>
        <Ionicons name="log-out-outline" color={Colors.errorText} size={24} />
        <Text style={styles.logoutText}>Çıkış</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default MyProfile;
