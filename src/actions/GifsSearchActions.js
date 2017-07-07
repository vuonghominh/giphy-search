import { CALL_API, Schemas } from '../middleware/api'

export const GIFS_SEARCH_REQUEST = 'GIFS_SEARCH_REQUEST'
export const GIFS_SEARCH_SUCCESS = 'GIFS_SEARCH_SUCCESS'
export const GIFS_SEARCH_FAILURE = 'GIFS_SEARCH_FAILURE'

const fetchGifs = (nextPageUrl) => ({
  query: 'query',
  [CALL_API]: {
    types: [ GIFS_SEARCH_REQUEST, GIFS_SEARCH_SUCCESS, GIFS_SEARCH_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.GIF_ARRAY
  }
})

export const gifsSearch = (query, nextPage) => (dispatch, getState) => {
  const {
    nextPageUrl = `/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`,
    pageCount = 0
  } = getState().pagination.gifsSearchResult['query'] || {}

  if (pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchGifs(nextPageUrl))
}

export const GIFS_SEARCH_RESET = 'GIFS_SEARCH_RESET'

export const resetGifsSearchResult = () => (dispatch) => {
  return dispatch({ type: GIFS_SEARCH_RESET })
}
