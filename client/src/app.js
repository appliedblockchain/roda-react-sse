import React, { Component } from 'react'
import store from './store'
import Provider from './lib/provider'
import AppContent from './components/AppContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // if a router is present you'll probably need to define the provider on every route unless you want to save in the store the current route path as well
        }
        <Provider store={store}>
          <AppContent />
        </Provider>
      </div>
    )
  }
}

export default App
