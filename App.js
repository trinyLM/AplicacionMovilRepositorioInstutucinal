import { useEffect, useState, useCallback } from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";
import RegisterScreen from "./src/screens/RegisterScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <LoginScreen />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
