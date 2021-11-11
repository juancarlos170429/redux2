import { combineReducers } from 'redux'
import { MASCOTA_ERROR, MASCOTA_LIST, MASCOTA_LOADING } from '../../actions/mascotas/list'

const error = (state = null, action) => {
  switch (action.type) {
    case MASCOTA_ERROR:
      return action.error
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case MASCOTA_LOADING:
      return action.loading
    default:
      return state
  }
}

const data = (state = [], action) => {
  switch (action.type) {
    case MASCOTA_LIST:
      return action.data
    default:
      return state
  }
}


export default combineReducers({ error, loading, data })