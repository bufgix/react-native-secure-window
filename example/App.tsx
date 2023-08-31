import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeSecureWindow from 'react-native-secure-window';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeSecureWindow.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
