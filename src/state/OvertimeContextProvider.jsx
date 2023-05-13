import { createContext, useReducer } from "react";

/// context creator
export const OvertimeContext = createContext();

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
const OvertimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <OvertimeContext.Provider value={{ state, dispatch }}>
      {children}
    </OvertimeContext.Provider>
  );
};

export default OvertimeContextProvider;
