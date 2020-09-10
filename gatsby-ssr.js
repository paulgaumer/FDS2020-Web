// Allows us to keep the state given by React Context on page change
const React = require('react');
const GlobalContextProvider = require('./src/context/global-context-provider')
  .default;

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
