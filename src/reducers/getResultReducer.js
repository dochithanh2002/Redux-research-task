import { GET_RESULT_SUCCESS } from "../constants/ActionTypes";

// initialState
const initialState = {
  films: [],
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESULT_SUCCESS:
      return {
        ...state,
        films: action.response.data,
      };
    default:
      return state;
  }
}
