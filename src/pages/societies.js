import React from "react"
import queryString from "query-string"

import { Api } from '../lib'

import '../styles/societies.scss'

class SocietiesList extends React.Component {
  constructor() {
    super()
    this.state = {
      id: null,
      society: {},
      societies: []
    }
  }
  componentDidMount() {
    const { id } = queryString.parse(window.location.search)
    this.setState({ id })
    if (id) {
      this.fetchSocietyById(id)
    } else {
      this.fetchSocieties()
    }

  }
  fetchSocieties = async () => {
    const societies = await Api.getSocieties()
    this.setState({ societies })
  }
  fetchSocietyById = async (id) => {
    const society = await Api.getSocietyById(id)
    this.setState({ society })
  }
  renderSocietiesList = () => {
    const { societies } = this.state
    return (
      <div className="societies-container">
        {
          societies.map(({ id, name, logo }) => (
            <a href={`/societies/?id=${id}`} key={id}>
              <div className="society">
                <img alt={`logo of ${name}`} src={logo} />
                <h1>{name}</h1>
              </div>
            </a>
          ))
        }
      </div>
    )
  }
  renderSociety = () => {
    const { society } = this.state
    return (
      <div className="society-container">
        <h1>{society.name}</h1>
        <pre>
          {JSON.stringify(society, null, 2)}
        </pre>
      </div>
    )
  }
  render() {
    const { societies, id } = this.state
    return (
      <div id="societies-page">
        {
          id
            ? this.renderSociety()
            : this.renderSocietiesList()
        }
      </div>
    )
  }
}

export default SocietiesList
