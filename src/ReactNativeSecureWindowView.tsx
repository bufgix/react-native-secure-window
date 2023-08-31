import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeSecureWindowViewProps } from './ReactNativeSecureWindow.types';

const NativeView: React.ComponentType<ReactNativeSecureWindowViewProps> =
  requireNativeViewManager('ReactNativeSecureWindow');

export default function ReactNativeSecureWindowView(props: ReactNativeSecureWindowViewProps) {
  return <NativeView {...props} />;
}
