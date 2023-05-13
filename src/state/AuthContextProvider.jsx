import { createContext, useEffect, useReducer } from 'react';

/// context creator
export const AuthContext = createContext();

// Initial state
const initState = { loading: true, isValidToken: false };

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loading: action.payload.loading,
        isValidToken: action.payload.isValidToken,
      };
    default:
      return state;
  }
};

// Provider
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch({
        type: 'LOGIN',
        payload: { loading: false, isValidToken: true },
      });
    } else {
      dispatch({
        type: 'LOGIN',
        payload: { loading: false, isValidToken: false },
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
