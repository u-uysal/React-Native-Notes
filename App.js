import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [state, setstate] = useState("");

  const inputHandler = (val) => {
    setstate(val);
  };
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        multiline //write multiline code
        style={styles.inputArea}
        onChangeText={inputHandler}
        placeholder="your name"
      />
      <Text>Age</Text>
      <TextInput
        keyboardType="numeric" // write only numbers
        style={styles.inputArea}
        onChangeText={inputHandler}
        placeholder="your name"
      />
      <Text>{state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputArea: {
    border: "1px solid red",
    padding: 10,
    margin: 10,
  },
});
