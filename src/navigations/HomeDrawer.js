import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Listilans from "../components/Listilans";
import IlanEkle from "../components/IlanEkle";
import { auth } from "../db/firestore3";
import { MainContext, useContext } from "../context";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  const { yenile } = useContext(MainContext);
  useEffect(() => {}, [yenile]);
  return (
    <Drawer.Navigator initialRouteName="İlanları Listele">
      <Drawer.Screen
        name="İlanları Listele"
        component={Listilans}
        options={{ headerShown: false }}
      />
      {auth.currentUser && (
        <Drawer.Screen
          name="İlan Ekle"
          component={IlanEkle}
          options={{ headerShown: false }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
