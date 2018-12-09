import React from 'react'
import PropTypes from 'prop-types'
import './main.css'

class Main extends React.Component {
  render = () => (
    <main>
      {this.props.children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
