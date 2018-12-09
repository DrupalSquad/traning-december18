import React from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = React.createContext()

class AppContextProvider extends React.Component {
  state = {
    profile: null,
    registerModalOpen: false,
    loginModalOpened: false,
    logoutModalOpened: false,
  }

  actions = {
    setProfile: (profile) => this.setState(
      state => ({
        profile: profile
      })
    ),
    toggleRegisterModalOpened: () => this.setState(
      state => ({
        registerModalOpened: !this.state.registerModalOpened
      })
    ),
    toggleLoginModalOpened: () => this.setState(
      state => ({
        loginModalOpened: !this.state.loginModalOpened
      })
    ),
    toggleLogoutModalOpened: () => this.setState(
      state => ({
        logoutModalOpened: !this.state.logoutModalOpened
      })
    )
  }

  render = () => (
    <Provider value={{...this.state, ...this.actions}}>
      {this.props.children}
    </Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

function withAppContext(Component) {
  return function WrapperComponent(props) {
    return (
      <Consumer>
        {state => <Component {...props} context={state} />}
      </Consumer>
    );
  };
}

export { AppContextProvider, withAppContext }
