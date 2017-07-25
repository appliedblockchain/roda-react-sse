import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Row from './Row'

class PriceTable extends Component {
  constructor(props) {
    super(props)
    this.headerKeys = ['id', 'price', 'size', 'name']
  }

  render() {
    const data = this.props.data
    return (
      <table className="table is-bordered is-striped">
        <thead>
          <tr>
            {this._header()}
          </tr>
        </thead>
        <tbody>
          {this._rows(data)}
        </tbody>
      </table>
    )
  }

  _header() {
    const { sortKey, sortOrder, onSortChange } = this.props
    const thEls = this.headerKeys.map((key) => {
      const css = classNames('fa Table-sort-icon', {
        'fa-sort': key !== sortKey,
        'fa-sort-asc': (key === sortKey && sortOrder === 'asc'),
        'fa-sort-desc': (key === sortKey && sortOrder === 'desc')
      })
      return (
        <th
          key={key}
          className="Table-th"
          onClick={() => { onSortChange(key) }}
        >
          {key}
          <i className={css}></i>
        </th>
      )
    })

    return thEls
  }

  _rows(data) {
    const rows = data.map((d) => {
      return(<Row key={d.id} attrs={d} />)
    })
    const isEmpty = Array.isArray(rows) && rows.lenght === 0
    return (isEmpty ? null : rows)
  }

}

PriceTable.propTypes = {
  data: PropTypes.array.isRequired,
  sortKey: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired
}

export default PriceTable
