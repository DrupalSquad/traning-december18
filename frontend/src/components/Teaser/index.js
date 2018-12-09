import React from 'react'
import Aux from 'react-aux'
import { Link } from 'react-router-dom'
import { get, first } from 'lodash'
import PropTypes from 'prop-types'

class Teaser extends React.Component {
  render = () => {
    const { node } = this.props

    console.log(node)

    const teaser = {
      uri: `node/${get(first(node.nid), 'value')}`,
      title: get(first(node.title), 'value'),
      body: get(first(node.body), 'processed')
    }

    return (
      <Aux>
        <h4>
          <Link to={teaser.uri}>{teaser.title}</Link>
        </h4>
        <div dangerouslySetInnerHTML={{ __html: teaser.body }} />
        <hr />
      </Aux>
  )}
}

Teaser.propTypes = {
  node: PropTypes.object.isRequired
}

export default Teaser
