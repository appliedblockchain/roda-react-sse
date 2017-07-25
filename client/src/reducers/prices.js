import store from '../store'

// Action creators
const PREFIX = 'AB/prices'
const UPDATE = `${PREFIX}/UPDATE`
const SORT_CHANGE = `${PREFIX}/SORT_CHANGE`

const update = (newPrices) => {
  store.dispatch({
    type: UPDATE,
    payload: newPrices.example
  })
}

const sortChange = (sortKey, sortOrder) => {
  store.dispatch({
    type: SORT_CHANGE,
    payload: {
      sortKey,
      sortOrder
    }
  })
}

export const Actions = {
  SORT_CHANGE,
  sortChange,
  UPDATE,
  update
}

// Reducer
const initialState = {
  data: [],
  sortKey: 'id',
  sortOrder: 'asc'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_CHANGE:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default reducer
