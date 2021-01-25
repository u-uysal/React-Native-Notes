import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [names, setName] = useState([
    { name: "ufuk", key: 1 },
    { name: "uysal", key: 2 },
  ]);

  const inputHandler = (val) => {
    setName(val);
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={names}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      {/*   <ScrollView>
        {names.map((item) => {
          return <Text>{item.name}</Text>;
        })}
      </ScrollView> */}
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
});
