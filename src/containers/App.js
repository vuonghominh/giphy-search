import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../actions'
import ErrorMessage from '../components/ErrorMessage'

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <ErrorMessage {...this.props} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.errorMessage
})

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
