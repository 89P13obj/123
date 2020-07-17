import * as React from "react";
import { Fontisto } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import MainScreen from "./MainScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import DialogScreen from "./DialogScreen";
import UserScreen from "./UserScreen";
import FavoriteScreen from "./FavoriteScreen";
import AppHeader from "../components/AppHeader";

const MainStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const DialogStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Main" >
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="User" component={UserScreen} />
    </MainStack.Navigator>
  );
}
function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator initialRouteName="Favorite">
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
}
function DialogStackScreen() {
  return (
    <DialogStack.Navigator initialRouteName="Dialog">
      <DialogStack.Screen name="Dialog" component={DialogScreen} />
    </DialogStack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const icons = {
  MainStack:"home",
  FavoriteStack:"favorite",
  DialogStack:"hipchat",
  ProfileStack:"player-settings",
};

export default function MyStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainStack"
        initialRoute={{ statusBarHidden: false }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName = icons[route.name];
            let sizeIcon = focused ? 30 : 20;
            
            return <Fontisto name={iconName} size={sizeIcon} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "purple",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="MainStack" component={MainStackScreen} />
        <Tab.Screen name="FavoriteStack" component={FavoriteStackScreen} />
        <Tab.Screen name="DialogStack" component={DialogStackScreen} />
        <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
  
}
