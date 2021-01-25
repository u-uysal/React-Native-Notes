import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [state, setstate] = useState("ufuk");

  const clickHandler = () => {
    setstate("uysal");
  };
  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <View style={styles.buttonContainer}>
        <Button title="click me" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});
