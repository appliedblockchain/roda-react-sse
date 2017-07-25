import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = []

if (process.env.NODE_ENV === 'development') {
	const logger = createLogger({collapsed: true})
	middlewares.push(logger)
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
