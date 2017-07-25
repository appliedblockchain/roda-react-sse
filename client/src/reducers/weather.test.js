import {
  Actions,
  default as reducer
} from './weather'

describe('reducers/weather', () => {
  describe('Action creator', () => {
    describe('request', () => {
      it('triggers LOAD action', () => {
        Actions.request('latitude', 'longitude')
        expect(global.store.dispatch)
          .toHaveBeenLastCalledWith({
            type: Actions.LOAD
          })
      })

      describe('when request is successful', () => {
        beforeEach(() => {
          window.fetch = jest.fn(() => Promise.resolve({
            ok: true,
            json: function() {
              return {
                then: (fn) => {
                  fn({foo: 'bar'})
                }
              }
            }
          }))
        })
        it('triggers LOAD_SUCCESS action', (done) => {
          Actions.request('latitude', 'longitude')
            .then(() => {
              expect(global.store.dispatch)
                .toHaveBeenLastCalledWith({
                  type: Actions.LOAD_SUCCESS,
                  payload: {
                    foo: 'bar'
                  }
                })
              done()
            })
        })
      })

      describe('when request is not successful', () => {
        beforeEach(() => {
          window.fetch = jest.fn(() => Promise.resolve({
            ok: false
          }))
        })
        it('triggers LOAD_FAIL action', (done) => {
          Actions.request('latitude', 'longitude')
            .then(() => {
              expect(global.store.dispatch)
                .toHaveBeenLastCalledWith({
                  type: Actions.LOAD_FAIL
                })
              done()
            })
        })
      })
    })
  })

  describe('reducer', () => {
    describe('LOAD', () => {
      it('when state is undefined', () => {
        const state = reducer(void 0, {
          type: Actions.LOAD
        })

        expect(state).toMatchObject({
          loading: true,
          error: false
        })
      })
    })

    describe('LOAD_FAIL', () => {
      it('when state is undefined', () => {
        const state = reducer(void 0, {
          type: Actions.LOAD_FAIL
        })

        expect(state).toMatchObject({
          loading: false,
          error: true
        })
      })
    })

    describe('LOAD_SUCCESS', () => {
      it('when state is undefined', () => {
        const state = reducer(void 0, {
          type: Actions.LOAD_SUCCESS,
          payload: {
            foo: 'bar'
          }
        })

        expect(state).toMatchObject({
          loading: false,
          error: false,
          result: {
            foo: 'bar'
          }
        })
      })
    })
  })
})
