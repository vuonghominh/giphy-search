import React, { Component } from 'react'
import { connect } from 'react-redux'

import GifsSearchForm from '../../components/search/GifsSearchForm'
import GifsSearchResult from '../../components/search/GifsSearchResult'
import {
  gifsSearch,
  resetGifsSearchResult
} from '../../actions'

class GifsSearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: null
    }
  }

  handleSubmitForm = (data) => {
    this.setState({query: data.query})
    this.props.resetGifsSearchResult()

    return this.props.gifsSearch(data.query)
  }

  handleLoadMoreClick = () => {
    this.props.gifsSearch(this.state.query, true)
  }

  render() {
    const { gifs, pagination } = this.props

    return (
      <div>
        <GifsSearchForm
          handleSubmitForm={this.handleSubmitForm} />
        <GifsSearchResult
          gifs={gifs}
          onLoadMoreClick={this.handleLoadMoreClick}
          {...pagination} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    entities: { gifs },
    pagination: { gifsSearchResult }
  } = state

  const pagination = gifsSearchResult['query'] || { ids: [] }
  const gifsResult = pagination.ids.map(id => gifs[id])

  return { gifs: gifsResult, pagination }
}

export default connect(mapStateToProps, {
  gifsSearch,
  resetGifsSearchResult
})(GifsSearchContainer)
