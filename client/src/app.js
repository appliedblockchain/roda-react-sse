import React, { Component } from 'react'
import storeInstance from './store_instance'
import Provider from './lib/provider'
import AppContent from './comp/app_content'

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // if a router is present you'll probably need to define the provider on every route unless you want to save in the store the current route path as well
        }
        <Provider store={storeInstance}>
          <AppContent />
        </Provider>
      </div>
    )
  }
}

export default App
