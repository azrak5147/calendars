import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Agenda } from "react-native-calendars";

export default function CalendarsScreen() {
  const data = [
    [
      "2022-11-21",
      { title: "Meeting", notes: "Don't forget about the meeting" },
    ],
    ["2024-11-22", { title: "Birthday", notes: "Happy Birthday!" }],
    ["2024-11-23", { title: "Birthday", notes: "Happy Birthday!" }],
    ["2024-11-24", { title: "Birthday", notes: "Happy Birthday!" }],
    ["2022-11-26", { title: "Task", notes: "Complete this task" }],
  ];

  // Convert the data array to the format required by Agenda
  const formattedData = data.reduce((acc, [date, event]) => {
    acc[date] = acc[date] ? [...acc[date], event] : [event];
    return acc;
  }, {});

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
