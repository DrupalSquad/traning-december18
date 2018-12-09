import React from 'react'
import Aux from 'react-aux'
import { NavItem, NavLink } from 'reactstrap' 
import { withAppContext } from '../../../../context'

class Unauthorized extends React.Component {
  handleLoginOnClick = (event) => {
    event.preventDefault()

    this.props.context.toggleLoginModalOpened()
  }

  handleRegiserOnClick = (event) => {
    event.preventDefault()

    this.props.context.toggleRegisterModalOpened()
  }

  render = () => (
    <Aux>
      <NavItem>
        <NavLink href="/" onClick={this.handleLoginOnClick.bind(this)}>Login</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/" onClick={this.handleRegiserOnClick.bind(this)}>Register</NavLink>
      </NavItem>
    </Aux>
  )
}

export default withAppContext(Unauthorized)
