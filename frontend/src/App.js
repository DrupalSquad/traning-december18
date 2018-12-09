import React from 'react'
import Aux from 'react-aux'
import { Switch, Route } from 'react-router-dom'
import { Home, NotFound, Post } from './pages'
import { Layout, Header, Main, Footer, LoginModal, RegisterModal } from './components'

class App extends React.Component {
  render = () => (
    <Aux>
      <Layout>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/node/:nid' component={Post} />
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </Layout>
      <LoginModal />
      <RegisterModal />
    </Aux>
  )
}

export default App;
