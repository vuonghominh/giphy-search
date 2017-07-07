import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import paginate from './paginate'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {}, gifs: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  gifsSearchResult: paginate({
    mapActionToKey: action => 'query',
    types: [
      ActionTypes.GIFS_SEARCH_REQUEST,
      ActionTypes.GIFS_SEARCH_SUCCESS,
      ActionTypes.GIFS_SEARCH_FAILURE,
      ActionTypes.GIFS_SEARCH_RESET
    ]
  })
})

const rootReducer = combineReducers({
  form: formReducer,
  entities,
  pagination,
  errorMessage,
  routing
})

export default rootReducer
