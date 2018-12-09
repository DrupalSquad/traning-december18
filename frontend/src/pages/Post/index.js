import React from 'react'
import Aux from 'react-aux'
import PropTypes from 'prop-types'
import ApiService from '../../services/ApiService'

class Post extends React.Component {
  state = {
    loading: true,
    error: null,
    node: {
      title: null,
      body: null
    }
  }

  render = () => {
    const { loading, error } = this.state

    if (loading)
      return <div>Loading..</div>
    else if (error)
      return <div>{error}</div>

    const { title, body } = this.state.node

    return (
      <Aux>
        <h1>{title}</h1>
        <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
      </Aux>
    )
  }

  componentDidMount = () => {
    ApiService.getNode(this.props.match.params.nid)
      .then(response => {
        this.setState(
          state => ({
            loading: false,
            node: {
              title: response.data.title[0].value,
              body: response.data.body[0].processed,
            }
          })
        )
      })
      .catch(error => {
        this.setState(
          state => ({
            loading: false,
            error: error.response.data.message
          })
        )
      })
  }
}

Post.propTypes = {
  match: PropTypes.object.isRequired
}

export default Post
