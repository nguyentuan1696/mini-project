import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions'

const reducer = (state, action) =>
{
  console.log({action})
  if (action.type === CLEAR_CART) {
    return { ...state, count: [] }
  }

  if(action.type === DECREASE) {
    console.log('You decrease amount!')
  }

  if (action.type === INCREASE) {
    console.log('You increase amount!')
  }

  if (action.type === REMOVE) {
    return {...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)}
    
  }
  return state
}

export default reducer
