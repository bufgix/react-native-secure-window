import React, { useEffect } from "react";
import { requireNativeViewManager } from "expo-modules-core";
import { LogBox, Platform, View } from "react-native";

import { SecureWindowProps } from "./ReactNativeSecureWindow.types";
import * as ExpoScreenCapture from "expo-screen-capture";

LogBox.ignoreLogs([
  "`new NativeEventEmitter()` was called with a non-null argument without",
]);

const SecureWindowNativeView: React.ComponentType<SecureWindowProps> =
  Platform.OS === "android"
    ? View
    : requireNativeViewManager("ReactNativeSecureWindow");

export default function SecureWindow(props: SecureWindowProps) {
  useEffect(() => {
    if (Platform.OS === "android") {
      ExpoScreenCapture.preventScreenCaptureAsync();
    }
    return () => {
      if (Platform.OS === "android") {
        ExpoScreenCapture.allowScreenCaptureAsync();
      }
    };
  }, []);
  return <SecureWindowNativeView {...props} />;
}
