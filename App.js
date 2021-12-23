import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "./src/utils/Colors";
import { auth } from "./src/db/firestore3";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Anasayfa"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.primary1,
          },
          headerTitleStyle: {
            color: Colors.white,
          },
        }}
      >
        <Tab.Screen
          name="Anasayfa"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => {
              let iconName = focused ? "home" : "home-outline";
              size = focused ? 28 : 24;
              color = focused ? Colors.primary1 : Colors.gray;
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.primary1,
            tabBarInactiveTintColor: Colors.gray,
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => {
              let iconName = focused ? "person" : "person-outline";
              size = focused ? 28 : 24;
              color = focused ? Colors.primary1 : Colors.gray;
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.primary1,
            tabBarInactiveTintColor: Colors.gray,
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
