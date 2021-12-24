import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import SingleIlan from "./SingleIlan";
import { MainContext, useContext } from "../context";

import { db, auth } from "../db/firestore3";

const Listilans = () => {
  const [ilans, setIlans] = useState([]);
  const { yenile } = useContext(MainContext);

  useEffect(() => {
    getIlans(db);
    console.log("refreshList:  ");
  }, [yenile]);
  const getIlans = async (db) => {
    let arr = [];
    const response = db.collection("ilans");
    const data = await response.get();
    data.docs.forEach((item) => {
      arr.push(item.data());
      // setIlans([...ilans, item.data()]);
    });
    // db.collection("ilans")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((snapshot) => {
    //       let data = snapshot.data();
    //       setIlans([...ilans, data]);
    //       //temp = [...temp, data];
    //     });
    //   });
    setIlans(arr);
  };

  if (ilans.length === 0) return null;
  //console.log(ilans);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ilans}
        renderItem={({ item }) => <SingleIlan ilan={item} />}
        style={styles.flatList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  flatList: {
    width: "80%",
  },
});
export default Listilans;
