import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeSecureWindow.web.ts
// and on native platforms to ReactNativeSecureWindow.ts
import ReactNativeSecureWindowModule from './ReactNativeSecureWindowModule';
import ReactNativeSecureWindowView from './ReactNativeSecureWindowView';
import { ChangeEventPayload, ReactNativeSecureWindowViewProps } from './ReactNativeSecureWindow.types';

// Get the native constant value.
export const PI = ReactNativeSecureWindowModule.PI;

export function hello(): string {
  return ReactNativeSecureWindowModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeSecureWindowModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeSecureWindowModule ?? NativeModulesProxy.ReactNativeSecureWindow);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeSecureWindowView, ReactNativeSecureWindowViewProps, ChangeEventPayload };
