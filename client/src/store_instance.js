import { createStore } from 'redux'
import mainReducer from './reducers/main_reducer'

const reduxDevExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const storeInstance = createStore(
  mainReducer,
  reduxDevExtension
)

export default storeInstance
