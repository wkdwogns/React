/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

const initialState = {
  locationBeforeTransitions: null,
  number: 1,
  list : []
}

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
export function routerReducer(state = initialState, action) {
  if (action.type === LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: action.payload }
  }
  return state
}

export function list(state = initialState, action) {

  if(action.type === 'LIST') {
    return { list : action.list , number: state.number }
  }

  return state
}

export function show(state = initialState, action) {

  if(action.type === 'SHOW') {
    return { info : action.info , number: state.number }
  }

  return state
}

export function update(state = initialState, action) {

  if(action.type === INCREASE) {
    console.log("reducer");
    return { number: state.number + action.amount, list : state.list }
  }

  if(action.type === DECREASE) {
    return { number: state.number - action.amount, list : state.list }
  }

  return state
}
