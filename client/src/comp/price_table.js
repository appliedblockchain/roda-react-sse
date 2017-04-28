import React, { Component } from 'react'
import Row from './row'

class PriceTable extends Component {

  render() {
    const data = this.props.data
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>A: Price</th>
            <th>B: Size</th>
            <th>C: ...</th>
          </tr>
        </thead>
        <tbody>
          {this._rows(data)}
        </tbody>
      </table>
    )
  }

  _rows(data) {
    const rows = data.map((d) => {
      return(<Row key={d.id} attrs={d} />)
    })
    const isEmpty = Array.isArray(rows) && rows.lenght === 0
    return (isEmpty ? null : rows)
  }

}

export default PriceTable
