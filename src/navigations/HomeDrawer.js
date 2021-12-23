import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Listilans from "../components/Listilans";
import IlanEkle from "../components/IlanEkle";
import { auth } from "../db/firestore3";

const Drawer = createDrawerNavigator();

const HomeDrawer = (props) => {
  const [refreshList, setRefreshList] = useState(false);
  return (
    <Drawer.Navigator initialRouteName="İlanları Listele">
      <Drawer.Screen
        name="İlanları Listele"
        component={() => <Listilans refreshList={refreshList} />}
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
