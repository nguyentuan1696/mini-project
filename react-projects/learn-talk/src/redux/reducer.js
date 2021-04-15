import { SET_ACCOUNT } from './actions'
const reducer = (state = {}, action) => {
  if (action.type === SET_ACCOUNT) {
    return { ...state, values: action.payload }
  }

  return state
}

export default reducer
