import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

class Layout extends React.Component {
  render = () => (
    <Container>
      <Row>
        <Col>
          {this.props.children}
        </Col>
      </Row>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
