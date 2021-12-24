import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../utils/Colors";
import { auth } from "../db/firestore3";

const SingleIlan = ({ ilan }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <View style={styles.ilanContainer}>
      <View style={styles.ilanTop}>
        <View style={styles.ilanTopTextContainer}>
          <Text style={styles.ilanTopHeaderText}>Şirket </Text>
          <Text>: {ilan.sirket}</Text>
        </View>
        <View style={styles.ilanTopTextContainer}>
          <Text style={styles.ilanTopHeaderText}>Pozisyon </Text>
          <Text>: {ilan.pozisyon}</Text>
        </View>
        <View style={styles.ilanTopTextContainer}>
          <Text style={styles.ilanTopHeaderText}>İlan Sahibi </Text>
          <Text>: {ilan.ilanSahibi}</Text>
        </View>
        <View style={styles.ilanTopTextContainer}>
          <Text style={styles.ilanTopHeaderText}>Başvuran Sayısı </Text>
          <Text>: {ilan.basvuranlar.length}</Text>
        </View>
      </View>
      <View style={styles.ilanBottom}>
        <Text style={[styles.ilanTopHeaderText, { marginBottom: 10 }]}>
          Açıklama
        </Text>
        <View>
          {ilan.aciklama.length > 100 ? (
            <>
              {readMore ? (
                <Text>
                  {ilan.aciklama}
                  <Pressable onPress={() => setReadMore(false)}>
                    <Text style={styles.readMoreText}> Daha az oku...</Text>
                  </Pressable>
                </Text>
              ) : (
                <Text>
                  {ilan.aciklama.substr(0, 99)}
                  <Pressable
                    style={{ justifyContent: "flex-end" }}
                    onPress={() => setReadMore(true)}
                  >
                    <Text style={styles.readMoreText}> devamını oku...</Text>
                  </Pressable>
                </Text>
              )}
            </>
          ) : (
            <Text>{ilan.aciklama}</Text>
          )}
        </View>
        {auth.currentUser ? (
          <Pressable style={styles.basvurButton}>
            <Text style={styles.basvurButtonText}>Başvur</Text>
          </Pressable>
        ) : (
          <Text style={styles.unauthText}>
            Başvurmak için kayıt olun ya da giriş yapın
          </Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ilanContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary1,
    marginVertical: 20,
    backgroundColor: Colors.white,
  },
  ilanTop: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary1,
    padding: 10,
  },
  ilanTopTextContainer: {
    flexDirection: "row",
  },
  ilanTopHeaderText: {
    width: "40%",
    fontWeight: "bold",
  },
  ilanBottom: {
    padding: 10,
  },
  basvurButton: {
    width: "50%",
    alignItems: "center",
    backgroundColor: Colors.primary1,
    padding: 5,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  basvurButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  readMoreText: {
    color: Colors.gray,
  },
  unauthText: {
    textAlign: "center",
    color: Colors.green,
  },
});
export default SingleIlan;
