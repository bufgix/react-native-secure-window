# react-native-secure-window

Hide react native views with an overlay when capturing screen

| iOS                                                                                                                                                      | Android                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <video width="300" height="500" src="https://github.com/bufgix/react-native-secure-window/assets/22038798/127f6aa4-22ed-4684-b570-9168899683ed"></video> | <video width="300" height="500" src="https://github.com/bufgix/react-native-secure-window/assets/22038798/7547dbcd-491d-46c5-93fb-d45d83eebce1"></video> |



# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

# Installation in managed Expo projects

For managed Expo projects, no additional set up is necessary.

### Add the package to your npm dependencies

```bash
## You must install expo-screen-capture first
npx expo install expo-screen-capture
yarn add @bufgix/react-native-secure-window
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

### Configure for Android

No additional set up necessary.

### Usage

```tsx
import { Text, View } from "react-native";
import { SecureWindow } from "@bufgix/react-native-secure-window";

export default function App() {
  return (
    <View style={styles.container}>
      <SecureWindow>
        <Text>This text is protected by the SecureWindow</Text>
      </SecureWindow>

      <Text>This text is not protected by the SecureWindow</Text>
    </View>
  );
}
```

for Android, `<SecureWindow />` component prevent _whole_ screen from capturing due to Android limitation.

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide](https://github.com/bufgix/react-native-secure-window/blob/main/CONTRIBUTING.md).
