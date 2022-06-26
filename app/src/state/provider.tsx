import React, { createContext, useContext, useReducer } from 'react';
import { initialState, IState, stateReducer, TActions } from './reducer';

interface IStateProvider {
  children: React.ReactNode;
}

export const StateContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<TActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const StateProvider = ({ children }: IStateProvider) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
