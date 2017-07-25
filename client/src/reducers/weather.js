// (F - 32) / 1.8
import store from '../store'
import config from '../config/config'

const host = config.hostFull

// Action creators
const PREFIX = 'AB/weather'
const LOAD = `${PREFIX}/LOAD`
const LOAD_SUCCESS = `${PREFIX}/LOAD_SUCCESS`
const LOAD_FAIL = `${PREFIX}/LOAD_FAIL`

const request = (latitude, longitude) => {
  store.dispatch({
    type: LOAD
  })

  return fetch(`${host}/weather`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    cors: true,
    body: JSON.stringify({
      latitude,
      longitude
    })
  }).then((response) => {
    if (response.ok) {
      response.json().then((payload) => {
        store.dispatch({
          type: LOAD_SUCCESS,
          payload
        })
      })
    } else {
      store.dispatch({
        type: LOAD_FAIL
      })
    }
  }, () => {
    store.dispatch({
      type: LOAD_FAIL
    })
  })
}

export const Actions = {
  request,
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
}

// Reducer
const initialState = {
  result: {},
  error: false,
  loading: false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        error: false
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: false
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default reducer
