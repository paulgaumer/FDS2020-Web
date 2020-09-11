import React, { useReducer } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'mobileMenuOpen':
      return { ...state, isMobileMenuOpen: true };
    case 'mobileMenuClosed':
      return { ...state, isMobileMenuOpen: false };
    default:
      throw new Error();
  }
}

const GlobalContextProvider = ({ children }) => {
  const { allSanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        allSanitySiteSettings {
          edges {
            node {
              showCovid
            }
          }
        }
      }
    `
  );

  const initialState = {
    isMobileMenuOpen: false,
    showCovid: allSanitySiteSettings.edges[0].node.showCovid,
  };

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
