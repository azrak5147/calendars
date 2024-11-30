import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { CalendarContext } from "../context/CalendarContext";
export default function AddCalendar({ onClose = false }) {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY-MM-DD"
  );

  const { setData } = useContext(CalendarContext);

  const [date, setDate] = useState(startDate);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState("");
  const handleSave = () => {
    const newErrors = {
      title: title.trim() === "",
      notes: notes.trim() === "",
    };
    setErrors(newErrors);

    if (newErrors.title || newErrors.notes) {
      return;
    }
    console.log("saved events:", [date, { title, notes }]);
    setData((prevData) => {
      const updatedData = { ...prevData };
      if (updatedData[date]) {
        updatedData[date].push({ title, notes });
      } else {
        updatedData[date] = [{ title, notes }];
      }
      console.log("updated events:", [date, { title, notes }]);
      return updatedData;
    });

    onClose();
  };
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>

        <DatePicker
          mode="calendar"
          selected={date}
          minimumDate={startDate}
          onDateChange={(selectedDate) => setDate(selectedDate)}
        />
        <TextInput
          style={[styles.input, errors.title && styles.inputError]}
          placeholder="Enter the title"
          onChangeText={(text) => {
            setTitle(text);
            if (errors.title) setErrors((prev) => ({ ...prev, title: false }));
          }}
          value={title}
        />
        <TextInput
          style={[styles.input, errors.notes && styles.inputError]}
          placeholder="Enter the notes"
          onChangeText={(text) => {
            setNotes(text);
            if (errors.notes) setErrors((prev) => ({ ...prev, notes: false }));
          }}
          value={notes}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Arka plan rengi
  },
  modalView: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeButtonText: {
    color: "#f00",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  inputError: {
    borderColor: "red", // Hata olduğunda çerçeve kırmızı
  },
});
