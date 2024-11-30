import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useContext } from "react";
import { Agenda } from "react-native-calendars";
import { CalendarContext } from "../context/CalendarContext";
export default function CalendarsScreen() {
  const { data } = useContext(CalendarContext);
  console.log("dataaaaaa", data);

  const formattedData = data;
  // // Convert the data array to the format required by Agenda
  // const formattedData = data.reduce((acc, [date, event]) => {
  //   acc[date] = acc[date] ? [...acc[date], event] : [event];
  //   return acc;
  // }, {});
  console.log("formattedData", formattedData);
  return (
    <SafeAreaView style={styles.Agendacontainer}>
      <Agenda
        items={formattedData}
        renderItem={(item) => (
          <TouchableOpacity style={styles.activityContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.notesText}>{item.notes}</Text>
          </TouchableOpacity>
        )}
        renderEmptyData={() => <Text>No events for this day</Text>} // Boş günlerde bilgi göster
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Agendacontainer: {
    flex: 1,
    paddingRight: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notesText: {
    fontSize: 14,
    color: "gray",
  },
  activityContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 25,
  },
});
