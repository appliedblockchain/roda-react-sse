const c = console
import PricesEs from './api/prices_es'
import priceActions from './actions/prices'

const startup = () => {
  // fetch initial data
  PricesEs.onMessage((message) => {
    c.log("message:", message) // you can comment this line to disable the sample log
    priceActions.update(message)
  })
}

export default startup
