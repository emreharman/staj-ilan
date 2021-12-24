import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import Colors from "../utils/Colors";
import { auth, db } from "../db/firestore3";
import { MainContext, useContext } from "../context";

const SingleIlan = ({ ilan }) => {
  const [readMore, setReadMore] = useState(false);
  const { yenile, setYenile } = useContext(MainContext);

  const handleBasvur = async () => {
    const bas = ilan.basvuranlar;
    bas.push(auth.currentUser.email);
    const updatedIlan = {
      ...ilan,
      basvuranlar: bas,
    };
    db.collection("ilans")
      .get()
      .then((snap) => {
        snap.forEach(function (doc) {
          //console.log(doc.id, " => ", doc.data());
          if (
            doc.data().sirket === ilan.sirket &&
            doc.data().pozisyon === ilan.pozisyon &&
            doc.data().ilanSahibi === ilan.ilanSahibi &&
            doc.data().aciklama === ilan.aciklama
          ) {
            console.log(doc.id);
            db.collection("ilans")
              .doc(doc.id)
              .update(updatedIlan)
              .then(() => {
                setYenile(!yenile);
                Linking.openURL(
                  `mailto:${
                    ilan.ilanSahibi
                  }?subject=${"Staj Başvurusu"}&body=body`
                );
              })
              .catch((err) => console.log(err.message));
          }
        });
      });
    // db.collection("ilans")
    //   .doc(ilanId)
    //   .update(updatedIlan)
    //   .then(() => setYenile(!yenile))
    //   .catch((err) => console.log(err.message));
  };
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
          <>
            {ilan.basvuranlar.includes(auth.currentUser.email) ? (
              <Text style={styles.unauthText}>Bu ilana zaten başvurdunuz.</Text>
            ) : (
              <Pressable style={styles.basvurButton} onPress={handleBasvur}>
                <Text style={styles.basvurButtonText}>Başvur</Text>
              </Pressable>
            )}
          </>
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
