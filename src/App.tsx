import React from 'react';
import { hot } from 'react-hot-loader/root';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './App.css';

export const App = hot(_App)
export function _App(): JSXElement | null {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}