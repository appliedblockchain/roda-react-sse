import React from 'react'
import { shallow } from 'enzyme'
import Row from './Row'

describe('<Row />', () => {
  it('renders the correct row', () => {
    const attrs = {
      id: 1,
      price: 100,
      size: 10,
      name: 'Alixe'
    }
    const wrapper = shallow(
      <Row attrs={attrs} />
    )
    expect(wrapper.find('td').length).toEqual(4)
    expect(wrapper.text()).toEqual('110010Alixe')
  })

  describe('price colour', () => {
    describe('when price > 200', () => {
      const attrs = {
        id: 1,
        price: 203,
        size: 10
      }
      const wrapper = shallow(
        <Row attrs={attrs} />
      )
      expect(wrapper.find('.Row-price-high').length).toEqual(1)
    })

    describe('when price < 100', () => {
      const attrs = {
        id: 1,
        price: 98,
        size: 10
      }
      const wrapper = shallow(
        <Row attrs={attrs} />
      )
      expect(wrapper.find('.Row-price-low').length).toEqual(1)
    })

    describe('when price is 120', () => {
      const attrs = {
        id: 1,
        price: 120,
        size: 10
      }
      const wrapper = shallow(
        <Row attrs={attrs} />
      )
      expect(wrapper.find('.Row-price-low').length).toEqual(0)
      expect(wrapper.find('.Row-price-high').length).toEqual(0)
    })
  })
})
