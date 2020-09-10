import React, { useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'mobileMenuOpen':
      return true;
    case 'mobileMenuClosed':
      return false;
    default:
      throw new Error();
  }
}

const GlobalContextProvider = ({ children }) => {
  const initialState = false;

  // The "state" here matches the initialState, until it is changed by the result of the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
