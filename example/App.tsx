import { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

import { SecureWindow } from "@bufgix/react-native-secure-window";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <SecureWindow style={{ flex: 1 }}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
        <Text style={{ marginTop: 50 }}>
          This text is protected by the SecureWindow
        </Text>
        <Text>Counter: {counter}</Text>
        <Button
          title="Increment"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
      </SecureWindow>

      <Text style={{ marginTop: 100 }}>
        This text is not protected by the SecureWindow
      </Text>
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
