import defaultState from './main_state'

const mainReducer = (state = defaultState, action) => {
  // log current action:
  // console.log("action:", action)
  switch (action.type) {
    case "ACTION":
      // modify state
      return state
    case "ACTION2":
      // modify state ...
      return state
    case "PRICES_UPDATE":
      const examplePrices = action.example
      state.exampleData = examplePrices
      return state
    default:
      return state
  }
}

export default mainReducer
