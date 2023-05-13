// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
import axios from "axios";

// define constants
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";
const URL = "https://jsonplaceholder.typicode.com/todos";

// initial state
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const getTodosRequest = () => {
  return {
    type: REQUEST,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: SUCCESS,
    payload: todos,
  };
};
const getTodosFailed = (error) => {
  return {
    type: FAILED,
    payload: error,
  };
};

const reducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(getTodosFailed(error));
      });
  };
};
