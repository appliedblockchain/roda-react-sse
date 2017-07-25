import {
  Actions,
  default as reducer
} from './prices'

// normally in before function you can add variable to this
// not sure how it works in Jest, so created a variable instead
const newPrices = {
  example: [{id: 1, price: 50, size: 10}]
}

describe('reducers/prices', () => {
  describe('Action creator', () => {
    describe('sortChange()', () => {
      it('returns the correct action', () => {
        Actions.sortChange('prices', 'desc')
        expect(global.store.dispatch)
          .toHaveBeenLastCalledWith({
            type: Actions.SORT_CHANGE,
            payload: {
              sortKey: 'prices',
              sortOrder: 'desc'
            }
          })
      })
    })

    describe('update()', () => {
      it('returns the correct action', () => {
        Actions.update(newPrices)
        expect(global.store.dispatch)
          .toHaveBeenLastCalledWith({
            type: Actions.UPDATE,
            payload: newPrices.example
          })
      })
    })
  })

  describe('reducer', () => {
    describe('SORT_CHANGE', () => {
      it('when state is undefined', () => {
        const state = reducer(void 0, {
          type: Actions.SORT_CHANGE,
          payload: {
            sortKey: 'prices',
            sortOrder: 'desc'
          }
        })

        expect(state).toMatchObject({
          data: [],
          sortKey: 'prices',
          sortOrder: 'desc'
        })
      })
    })

    describe('UPDATE', () => {
      it('when state is undefined', () => {
        const state = reducer(void 0, {
          type: Actions.UPDATE,
          payload: newPrices.example
        })

        expect(state).toMatchObject({
          data: newPrices.example
        })
      })
    })
  })
})
