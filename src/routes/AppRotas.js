import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import NewLista from "../screens/NewLista";

import AddIcon from '../assets/plus-circle-white.png'
import ListIcon from '../assets/clipboard-text-white.png'
import ListaRotas from "./ListaRotas";


const Tab = createBottomTabNavigator();

export default function AppRotas() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: '#292b2c',
        },
        tabBarActiveTintColor: '#f0ad4e',
        tabBarInactiveTintColor: '#fff',
      })}

      >
        <Tab.Screen name="ListasHome" component={ListaRotas} options={{
          headerShown: false,
          tabBarIcon: () => <Image style={{
            height: 20,
            width: 20
          }} source={ListIcon} />,
          tabBarLabel: 'Listas',

        }} />
        <Tab.Screen name="Nova Lista" component={NewLista} options={{
          headerStyle: {
            backgroundColor: '#292b2c',
          },
          headerTintColor: '#f0ad4e',
          headerTitleAlign: "center",
          tabBarIcon: () => <Image style={{
            height: 20,
            width: 20
          }} source={AddIcon} />,
        }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}