import { createStore } from 'redux'

// initial state
const initialState = {
  title: 'hello from the redux store'
}

// ACTION_TYPES 
const TEST_ACTION = "TEST_ACTION"

// action creators
export const testAction = () => {
  return {
    type: TEST_ACTION
  }
}

// reducer
const rootReducer = (state = initialState, action) => {
  console.log('Dispatched action:', action, 'State when action was dispatched: ', state)

  switch(action.type) {
    case TEST_ACTION:
      return {
        ...state,
        title: 'hello again from the redux store'
      }
    default:
      return {...state}
  }
}

// store
export const store = createStore(rootReducer)