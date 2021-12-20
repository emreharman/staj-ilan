import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileContainer from "../components/ProfileContainer";
import Login from "../components/Login";
import Register from "../components/Register";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileContainer"
        component={ProfileContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Giriş Yap" component={Login} />
      <Stack.Screen name="Kayıt Ol" component={Register} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
