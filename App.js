// In App.js in a new project

import * as React from "react";
import { View, Text, Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarsScreen from "./screens/Calendars";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddCalendar from "./components/AddCalendar";
import { CalendarProvider } from "./context/CalendarContext";
const Stack = createNativeStackNavigator();

function RootStack() {
  const [modalVisible, setModalVisible] = React.useState(false);

  // Modal aç/kapat fonksiyonları
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <CalendarProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Calendars"
          component={CalendarsScreen}
          options={{
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
                onPress={openModal} // Modal açılır
              />
            ),
          }}
        />
      </Stack.Navigator>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <AddCalendar onClose={closeModal} />
      </Modal>
    </CalendarProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
