import axios from "axios";

// define constants
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";
const URL = "https://jsonplaceholder.typicode.com/todos";

// initial state
const initialState = {
  state: [],
  isLoading: false,
  error: null,
};

// action creator
const request = () => ({ type: REQUEST });
const success = (state) => ({ type: SUCCESS, payload: state });
const failed = (error) => ({ type: FAILED, payload: error });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS:
      return {
        ...state,
        state: action.payload,
        isLoading: false,
      };

    case FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(URL)
      .then((res) => {
        const state = res.data;
        const titles = state.map((todo) => todo.title);
        dispatch(success(titles));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(failed(error));
      });
  };
};
