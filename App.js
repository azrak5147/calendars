// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarsScreen from "./screens/Calendars";
import Ionicons from "@expo/vector-icons/Ionicons";
const Stack = createNativeStackNavigator();
import AddCalendar from "./components/AddCalendar";
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendars"
        component={CalendarsScreen}
        options={({ navigation }) => ({
          title: "My Agenda",
          headerStyle: {
            backgroundColor: "white", // Green background color
          },
          headerTintColor: "black", // White text color
          headerTitleStyle: {
            fontWeight: "bold", // Bold font
          },
          headerRight: () => (
            <Ionicons
              name="add"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => {
                <AddCalendar />;
                console.log("Pressed");
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
