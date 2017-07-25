import PricesEs from './api/pricesEs'
import { Actions } from './reducers/prices'
import { Actions as WeatherActions } from './reducers/weather'

const startup = () => {
  // fetch initial data
  PricesEs.onMessage((message) => {
    Actions.update(message)
  })

  // fetch weather for london
  // 51.508530, -0.076132 - Tower of London
  WeatherActions.request(51.508530, -0.076132)
}

export default startup
