import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Colors from "../utils/Colors";
import Error from "./Error";
import { auth } from "../db/firestore3";
import { StackActions } from "@react-navigation/native";
import { MainContext, useContext } from "../context";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { yenile, setYenile } = useContext(MainContext);

  const handleLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        const result = await auth.signInWithEmailAndPassword(email, password);
        setYenile(!yenile);
        navigation.dispatch(StackActions.push("MyProfile"));
      } else {
        setError(true);
        setErrorMessage("Email ya da Password alanı boş olamaz!");
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.kayitOl}
          onPress={() => {
            Keyboard.dismiss();
            handleLogin();
          }}
        >
          <Text style={styles.kayitOlText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      {error && <Error errorMessage={errorMessage} />}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary1,
    padding: 10,
    marginBottom: 30,
  },
  kayitOl: {
    width: "50%",
    alignItems: "center",
    backgroundColor: Colors.primary1,
    padding: 10,
    borderRadius: 5,
  },
  kayitOlText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Login;
