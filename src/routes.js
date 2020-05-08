import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Pay from "./pages/Pay";

import PayButton from "./Components/PayButton";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Pay: {
    lib: AntDesign,
    name: "home",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay")
            return (
              <PayButton
                focused={focused}
                onPress={() => {
                  navigation.navigate("Pay");
                }}
              />
            );

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#000",
          borderColor: "rgba(255,255,255,0.3)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: "Carteira",
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Pay}
        options={{
          title: "Notificatções",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
}
