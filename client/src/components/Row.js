import React, { Component } from 'react'
import classNames from 'classnames'

class Row extends Component {
  render() {
    const row = this.props ? this.props.attrs : {}
    const cssPrice = classNames({
      'Row-price-high': row.price > 200,
      'Row-price-low': row.price < 100
    })
    return (
      <tr>
        <td>{row.id}</td>
        <td className={cssPrice}>{row.price}</td>
        <td>{row.size}</td>
        <td>{row.name}</td>
      </tr>
    )
  }
}

export default Row
