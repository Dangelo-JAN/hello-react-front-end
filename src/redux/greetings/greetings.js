// Action Types
const GET = 'hello-rails-back-end/greetings/GET';
const baseURL = 'http://localhost:3000/greetings';
const initialState = [];

// Reducer
export default function greetingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return action.payload;

    default:
      return state;
  }
}

// calls
const fetchGreetings = async () => {
  const result = await fetch(baseURL);
  const data = await result.json();
  return data;
};

// Action Creators
export const getGreetings = () => async (dispatch) => {
  const greetings = await fetchGreetings();
  dispatch({ type: GET, payload: greetings });
};
