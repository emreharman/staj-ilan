import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Listilans from "../components/Listilans";
import IlanEkle from "../components/IlanEkle";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="İlanları Listele">
      <Drawer.Screen
        name="İlanları Listele"
        component={Listilans}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="İlan Ekle"
        component={IlanEkle}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
