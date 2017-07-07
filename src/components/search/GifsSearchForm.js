import React from 'react'
import { Field, reduxForm } from 'redux-form'

const GifsSearchForm = props => {
  const { handleSubmit, pristine, submitting } = props
  const { handleSubmitForm } = props

  return (
    <form className="gifs-search-form" >
      <Field
        name="query"
        component="input"
        type="text"
        placeholder="Search here"
        />
      <button
        type="submit"
        onClick={handleSubmit((data) => handleSubmitForm(data))}
        disabled={pristine || submitting}>
        Go
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'gifsSearchForm'
})(GifsSearchForm)
