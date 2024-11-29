import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";

export default function AddCalendar() {
  return (
    <View>
      <Modal
        visible={true}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Add Calendar</Text>
        </View>
      </Modal>
      <Text>Add Calendar Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
