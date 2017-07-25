import { combineReducers } from 'redux'
import prices from '../reducers/prices'
import weather from '../reducers/weather'

const reducers = combineReducers({
  prices,
  weather
})

export default reducers
