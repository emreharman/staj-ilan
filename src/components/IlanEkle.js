import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import Colors from "../utils/Colors";
import { db, auth } from "../db/firestore3";

const IlanEkle = ({ navigation }) => {
  const sirketRef = useRef();
  const pozisyonRef = useRef();
  const aciklamaRef = useRef();
  const [sirket, setSirket] = useState("");
  const [sirketError, setSirketError] = useState(false);
  const [pozisyon, setPozisyon] = useState("");
  const [pozisyonError, setPozisyonError] = useState(false);
  const [aciklama, setAciklama] = useState("");
  const [aciklamaError, setAciklamaError] = useState(false);

  const handleSubmit = ({ refreshList, setRefreshList }) => {
    if (sirket === "") {
      sirketRef.current.focus();
      return;
    }
    if (pozisyon === "") {
      pozisyonRef.current.focus();
      return;
    }
    if (aciklama === "") {
      aciklamaRef.current.focus();
      return;
    }
    const ilan = {
      sirket,
      aciklama,
      pozisyon,
      ilanSahibi: auth.currentUser.email,
    };
    db.collection("ilans")
      .add(ilan)
      .then(() => {
        //setRefreshList(!refreshList);
        setSirket("");
        setPozisyon("");
        setAciklama("");
        navigation.navigate("İlanları Listele");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <Text style={styles.headerText}>İlan Ekle</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Şirket (Ör: Tech A.Ş.)"
          value={sirket}
          ref={sirketRef}
          onChangeText={(text) => setSirket(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pozisyon (ör: Frontend Developer)"
          value={pozisyon}
          onChangeText={(text) => setPozisyon(text)}
          ref={pozisyonRef}
        />
        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="İlan Açıklaması"
          value={aciklama}
          onChangeText={(text) => setAciklama(text)}
          ref={aciklamaRef}
        />
        <View
          style={{
            width: "80%",
          }}
        >
          <Text>İlan Sahibi</Text>
          <TextInput
            editable={false}
            style={[styles.input, { width: "100%" }]}
            value={auth.currentUser.email}
          />
        </View>
        <Pressable style={styles.ekleButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary1,
    marginBottom: 20,
  },
  formContainer: {
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
  ekleButton: {
    width: "50%",
    alignItems: "center",
    backgroundColor: Colors.primary1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default IlanEkle;
