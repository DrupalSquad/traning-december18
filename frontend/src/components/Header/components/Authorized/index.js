import React from 'react'
import Aux from 'react-aux'
import PropTypes from 'prop-types'
import { NavItem, NavLink } from 'reactstrap'
import { withAppContext } from '../../../../context'

class Unauthorized extends React.Component {
  handleLogoutOnClick = (event) => {
    event.preventDefault()

    this.props.context.toggleLogoutModalOpened()
  }

  render = () => (
    <Aux>
      <NavItem>
        <NavLink disabled>Hello {this.props.context.profile.name}!</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/" onClick={this.handleLogoutOnClick.bind(this)}>Logout</NavLink>
      </NavItem>
    </Aux>
  )
}

Unauthorized.propTypes = {
  context: PropTypes.object.isRequired
}

export default withAppContext(Unauthorized)
