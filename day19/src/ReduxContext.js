import React from 'react';

const ReduxContext = React.createContext();

export const ReduxProvider = ({ store, children }) => (
  <ReduxContext.Provider value={{ store }}>{children}</ReduxContext.Provider>
);
export const ReduxConsumer = ReduxContext.Consumer;
