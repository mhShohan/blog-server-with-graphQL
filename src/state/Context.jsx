import { createContext, useReducer } from "react";

/// context creator
export const Context = createContext();

// Initial state
const initState = [{ key: "value" }];

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTION_1":
      return [...state, { key: action.payload }];
    case "ACTION_2":
      return [...state, { key: action.payload }];
    default:
      return state;
  }
};

// Provider
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

/* to use context api in components 

const { state, dispatch } = useContext(Context);

*/
