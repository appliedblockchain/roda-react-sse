import React from 'react'
import BaseComponent from './base'
import PriceTable from './PriceTable'
import { Actions } from '../reducers/prices'
import { asc, desc } from '../lib/sort'
import logo from '../assets/logo.svg'

class AppContent extends BaseComponent {
  constructor(props) {
    super(props)
    this.onSortChange = this.onSortChange.bind(this)
  }

  onSortChange(key) {
    const state = this.context.store.getState()
    const { sortOrder, sortKey }  = state.prices

    if (key === sortKey) {
      const newSortOrder = (sortOrder === 'asc') ? 'desc' : 'asc'
      Actions.sortChange(key, newSortOrder)
    } else {
      Actions.sortChange(key, 'asc')
    }
  }

  render() {
    const state = this.context.store.getState()
    const { timezone, currently } = state.weather.result
    return (
      <section>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          {timezone &&
            <h3>{timezone} - {parseInt(currently.temperature, 10)}C</h3>
          }
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
    const { data, sortOrder, sortKey }  = state.prices
    const sortedData = (sortOrder === 'asc') ?
      asc(data, sortKey) : desc(data, sortKey)
    return (
      <section className="columns">
        <div className="column is-half is-offset-one-quarter">
          <p className="App-intro">
            EventSource data:
          </p>
          <div className="s10" />
          <section>
            <PriceTable
              data={sortedData}
              sortOrder={sortOrder}
              sortKey={sortKey}
              onSortChange={this.onSortChange}
            />
          </section>
        </div>
      </section>
    )
  }
}

export default AppContent
