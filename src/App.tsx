import React from 'react';
import { hot } from 'react-hot-loader/root';

export const App = hot(_App)
export function _App(): JSXElement | null {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}