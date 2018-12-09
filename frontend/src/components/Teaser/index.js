import React from 'react'
import Aux from 'react-aux'
import { Link } from 'react-router-dom'
import { get, first } from 'lodash'
import PropTypes from 'prop-types'
import moment from 'moment'

class Teaser extends React.Component {
  render = () => {
    const { node } = this.props

    const teaser = {
      uri: `node/${get(first(node.nid), 'value')}`,
      published: (() => {
        console.log(moment(first(node.created).value).format(first(node.created).format))
      })(),
      title: get(first(node.title), 'value'),
      body: get(first(node.body), 'processed')
    }

    return (
      <Aux>
        <h4>
          <Link to={teaser.uri}>{teaser.title}</Link>
        </h4>
        <div className="text-muted">{teaser.published}</div>
        <div dangerouslySetInnerHTML={{ __html: teaser.body }} />
        <hr />
      </Aux>
  )}
}

Teaser.propTypes = {
  node: PropTypes.object.isRequired
}

export default Teaser
