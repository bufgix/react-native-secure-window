import * as React from 'react';

import { ReactNativeSecureWindowViewProps } from './ReactNativeSecureWindow.types';

export default function ReactNativeSecureWindowView(props: ReactNativeSecureWindowViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
