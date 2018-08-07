import React from 'react'
import PageAPI from './PageAPI'
import { Link } from 'react-router-dom'

const DetailedAboutPage = (props) => {
  const page = PageAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!page) {
    return <div>Sorry, but the page was not found</div>
  }
  return (
    <div>
      <h1>{page.name} (#{page.number})</h1>
      <h2>Position: {page.data}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default DetailedAboutPage
