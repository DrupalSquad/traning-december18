import React from 'react'
import PropTypes from 'prop-types'
import { withAppContext } from '../../context'
import {
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import FormData from 'form-data'
import ApiService from '../../services/ApiService'

class LoginModal extends React.Component {
  state = {
    loading: false,
    error: null
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    this.setState(
      state => ({
        loading: true,
        error: null
      })
    )

    let data = {}

    new FormData(event.target).forEach((value, key) =>
      data[key] = value
    )

    ApiService.userLogin(data)
      .then(response => {
        this.setState(
          state => ({
            loading: false
          })
        )

        const { setProfile, toggleLoginModalOpened } = this.props.context

        setProfile(response.data.current_user)

        toggleLoginModalOpened()
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

  render = () => {
    const { loginModalOpened, toggleLoginModalOpened } = this.props.context

    return (
      <Modal isOpen={loginModalOpened} toggle={toggleLoginModalOpened}>
        <ModalHeader toggle={toggleLoginModalOpened}>Login</ModalHeader>
        {this.state.error ? this.state.error.split('\n').map((item, key) => {
          return item.length ? <Alert key={key} color="danger">{item}</Alert> : null
        }) : null}
        <Form onSubmit={this.handleFormSubmit.bind(this)}>
          <ModalBody>
            <FormGroup>
              <Label for="name">Username</Label>
              <Input type="text" required name="name" id="name" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Label for="pass">Password</Label>
              <Input type="password" required name="pass" id="pass" placeholder="Password" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button disabled={this.state.loading}>Submit</Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

LoginModal.propTypes = {
  context: PropTypes.object.isRequired
}

export default withAppContext(LoginModal)
