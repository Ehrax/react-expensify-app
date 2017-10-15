import { createStore } from 'redux'

// Action generators - functions that return aciton objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = -1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const reset = () => ({
  type: 'RESET'
})

const set = ({ count }) => ({
  type: 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions
//  not a pure function
//    let a = 10;
//    const add = (b) => {
//      return a + b
//    }
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(reset())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(set({ count: 101 }))

unsubscribe()
