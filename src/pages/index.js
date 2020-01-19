import React from 'react'

class IndexPage extends React.Component {
  componentDidMount() {
    window.location.replace(`/societies`)
  }
  render() {
    return (
      <h1>Redirecting...</h1>
    )
  }
}

export default IndexPage