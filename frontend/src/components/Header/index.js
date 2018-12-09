import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Authorized, Unauthorized } from './components'
import { withAppContext } from '../../context'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav
} from 'reactstrap'

class Header extends Component {
  state = {
    navbarCollapsed: false
  }

  toggleNavbar = () => {
    this.setState(
      state => ({
        navbarCollapsed: !this.state.navbarCollapsed
      })
    )
  }

  render = () => {
    return (
      <header>
        <Navbar light color="light" expand="md">
          <NavbarBrand tag={Link} to="/">Drupal 8 & React</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar.bind(this)} />
          <Collapse isOpen={this.state.navbarCollapsed} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.context.profile ? <Authorized /> : <Unauthorized />}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

Header.propTypes = {
  context: PropTypes.object.isRequired
}

export default withAppContext(Header)
