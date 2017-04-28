import React from 'react'
import Comp from './base/comp'
import PriceTable from './price_table'
import logo from '../assets/logo.svg'

class AppContent extends Comp {
  render() {
    return (
      <section>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="s30" />
        <div className="container is-fluid">
          {this._content()}
        </div>
      </section>
    )
  }

  _content() {
    const state = this.context.store.getState()
    // console.log("state:", state)
    const data  = state.exampleData
    return (
      <section className="columns">
        <div className="column is-half is-offset-one-quarter">
          <p className="App-intro">
            EventSource data:
          </p>
          <div className="s10" />
          <section>
            <PriceTable data={data} />
          </section>
          <div className="s20" />
          <button className="button is-primary">Test</button>
        </div>
      </section>
    )
  }
}

export default AppContent
