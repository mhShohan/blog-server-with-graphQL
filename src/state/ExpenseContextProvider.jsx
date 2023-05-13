import { createContext, useReducer } from "react";

/// context creator
export const ExpenseContext = createContext();

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
const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
