import React from 'react'
import { Teaser } from '../../components'
import ApiService from '../../services/ApiService'

export default class extends React.Component {
  state = {
    data: []
  }

  render = () => this.state.data.map((node, key) => (
    <Teaser key={key} node={node} />
  ))

  componentDidMount = () => {
    ApiService.getNodes()
      .then(response => {
        this.setState(state => ({
          loading: false,
          data: response.data
        }))
      })
  }
}
