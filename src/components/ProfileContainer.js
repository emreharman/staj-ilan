import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../utils/Colors";
import Login from "./Login";

const ProfileContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.login]}
        onPress={() => navigation.navigate("Giriş Yap")}
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.register]}
        onPress={() => navigation.navigate("Kayıt Ol")}
      >
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 10,
  },
  login: {
    backgroundColor: Colors.yellow,
  },
  register: {
    backgroundColor: Colors.green,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ProfileContainer;
