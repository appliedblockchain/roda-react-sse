import store from '../store_instance'

const priceActions = {
  update: (newPrices) => {
    store.dispatch({ type: "PRICES_UPDATE", example: newPrices.example})
  },
}

export default priceActions
