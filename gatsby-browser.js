import 'tailwindcss/dist/base.min.css';

// Allows us to keep the state given by React Context on page change

// import React from "react"
import GlobalContextProvider from './src/context/global-context-provider';
const React = require('react');
// const GlobalContextProvider = require("./src/context/global-context-provider")

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

export const onServiceWorkerUpdateReady = () => window.location.reload();
