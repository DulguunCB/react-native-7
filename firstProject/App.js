import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text } from "react-native";

import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Setting from "./Screens/Setting";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default function App() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}></Drawer.Screen>
        <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
        <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
