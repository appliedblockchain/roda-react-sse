import React, { Component } from 'react'

class Row extends Component {
  render() {
    const row = this.props ? this.props.attrs : {}
    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.price}</td>
        <td>{row.size}</td>
        <td>...</td>
      </tr>
    )
  }
}

export default Row
