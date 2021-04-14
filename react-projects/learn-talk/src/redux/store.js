
import reducer from './reducer'
import { createStore } from 'redux'

const initialState = {
 acc: ''
}

export const store = createStore(reducer, initialState)
console.log(store)



