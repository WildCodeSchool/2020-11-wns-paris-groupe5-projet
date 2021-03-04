import { StatusBar } from "expo-status-bar";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login/Login";
import Students from "./screens/Students/Students";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Students"
      lazy={false}
      tabBarOptions={{
        activeTintColor: "#0093FF",
        showLabel: false,
        adaptive: true,
        style: {
          position: "absolute",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 1,
          shadowRadius: 60,
          elevation: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Students"
        component={Students}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AntDesign name="dashboard" size={24} color="blue" />;
            }
            return <AntDesign name="dashboard" size={24} color="black" />;
          },
        }}
      />
      <>
        <Tab.Screen
          name="Profile"
          component={Students}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconimg = focused ? (
                <AntDesign name="profile" size={24} color="blue" />
              ) : (
                <AntDesign name="profile" size={24} color="black" />
              );
              return iconimg;
            },
          }}
        />
        <Tab.Screen
          name="Logout"
          component={Login}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <AntDesign name="user" size={24} color="blue" />;
              }
              return <AntDesign name="user" size={24} color="black" />;
            },
          }}
        />
      </>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Students"
        headerMode="none"
        mode="modal"
        screenOptions={{
          animationTypeForReplace: "pop",
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Students" component={HomeTabs} />
      </Stack.Navigator>
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
