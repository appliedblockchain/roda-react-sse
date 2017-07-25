import store from './store'

store.dispatch = jest.fn((data) => (data))

global.store = store
