import React, { createContext, useReducer, useEffect, useContext } from 'react';

const maxNominationCount = 5;
const localStorageKey = 'shoppie-memory';
const initialAppState = {
  maxNominationCount,
  nominations: []
};

const saveAppState = (state) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(state));
}

const getAppState = () => {
  const stateFromMemory = window.localStorage.getItem(localStorageKey);

  return stateFromMemory !== null ? JSON.parse(stateFromMemory) : initialAppState;
}

const AppContext = createContext({});
AppContext.displayName = 'AppContext';

export function AppContextProvider({ children }) {

  const actions = {
    addNomination: 'addNomination',
    deleteNomination: 'deleteNomination',
    reset: 'reset'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actions.addNomination:
        if (state.nominations.length < state.maxNominationCount) {
          return {
            ...state,
            nominations: [...state.nominations, action.nomination]
          };
        }
        break;
      case actions.deleteNomination:
        return {
          ...state,
          nominations: state.nominations
            .filter(nomination => nomination.imdbID !== action.nomination.imdbID)
        };
      case actions.reset:
        return initialAppState;
      default:
        console.error(`Unknown action: ${action}`);
    }
  };

  const [appState, dispatch] = useReducer(reducer, getAppState());

  useEffect(() => {
    saveAppState(appState);
  }, [appState]);

  const initialAppContextlValue = {
    ...appState,
    onAddNomination: (nomination) => {
      dispatch({
        type: actions.addNomination,
        nomination
      });
    },
    onDeleteNomination: (nomination) => {
      dispatch({
        type: actions.deleteNomination,
        nomination
      });
    },
    onReset: () => {
      dispatch({
        type: actions.reset
      });
    }
  };

  return (
    <AppContext.Provider value={initialAppContextlValue}>
      { children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
