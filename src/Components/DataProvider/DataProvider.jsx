import React, { createContext, useReducer } from "react";
import { initialstate, reducer } from "../../utility/reducer";


export const DataContext = createContext();


const DataProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider; 
