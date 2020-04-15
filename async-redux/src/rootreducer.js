import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

// initial state
const initialState = {
  title: ''
}

// ACTION_TYPES 
const GET_POSITON_START = "GET_POSITON_START"
const GET_POSITON_SUCCESS = "GET_POSITON_SUCCESS"
const GET_POSITON_FAILURE = "GET_POSITON_FAILURE"

// action creators
export const getPosition = () => dispatch => {
  dispatch({ type: GET_POSITON_START });
  axios.get("http://api.open-notify.org/iss-now.json")
    .then(response => {
      dispatch({ type: GET_POSITON_SUCCESS, payload: response.data.iss_position})
    })
    .catch(error => {
      dispatch({ type: GET_POSITON_FAILURE, payload: "something went wrong"})
    })
}

// reducer
const rootReducer = (state = initialState, action) => {
  console.log('Dispatched action:', action, 'State when action was dispatched: ', state)

  switch(action.type) {
    case GET_POSITON_SUCCESS:
      return {
        ...state,
        title: `${action.payload.latitude}, ${action.payload.longitude}`
      }
    case GET_POSITON_FAILURE:
      return {
        ...state,
        title: action.payload
      }
    default:
      return {...state}
  }
}

// store
export const store = createStore(rootReducer, applyMiddleware(thunk))