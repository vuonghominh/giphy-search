import React from 'react'

const GifsSearchResult = (props) => {
  const { gifs, isFetching, nextPageUrl, pageCount, onLoadMoreClick } = props

  const renderLoadMore = () => {
    return (
      <button
        style={{ fontSize: '150%' }}
        onClick={onLoadMoreClick}
        disabled={isFetching}>
        {isFetching ? 'Loading...' : 'Load More'}
      </button>
    )
  }

  const isEmpty = gifs.length === 0
  if (isEmpty && isFetching) {
    return <h2><i>Loading...</i></h2>
  }

  const isLastPage = !nextPageUrl
  if (isEmpty && isLastPage) {
    return <h1><i>Nothing here!</i></h1>
  }

  return (
    <div className="gifs-search-result-control">
      <ul>
        { gifs.map((gif, index) =>
            <li key={index} ><img src={gif.images.downsized.url} alt="" /></li>
          )
        }
      </ul>
      {pageCount > 0 && !isLastPage && renderLoadMore()}
    </div>
  )
}

export default GifsSearchResult
