import { createContext, useEffect, useReducer, useState } from 'react';
import salesAPI from '../apis/salesAPI';

/// context creator
export const SalesContext = createContext();

// Initial state
const initState = {
  sales: [],
  isLoading: true,
  error: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        sales: action.payload,
        isLoading: false,
      };
    case 'FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// Provider
const SalesContextProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);

  const request = () => {
    return {
      type: 'REQUEST',
    };
  };

  const success = (sales) => {
    return {
      type: 'SUCCESS',
      payload: sales,
    };
  };
  const failed = (error) => {
    return {
      type: 'FAILED',
      payload: error,
    };
  };

  useEffect(() => {
    dispatch(request());
    (async () => {
      const res = await salesAPI.getSales();

      if (res.data) {
        dispatch(success(res.data.result.data));
      } else {
        dispatch(failed(res.error));
      }
    })();
  }, [update]);

  return (
    <SalesContext.Provider value={{ state, dispatch, setUpdate }}>
      {children}
    </SalesContext.Provider>
  );
};

export default SalesContextProvider;
