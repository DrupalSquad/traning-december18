import React from 'react'
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
import ApiService from '../../services/ApiService'

class RegisterModal extends React.Component {
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
      data[key] = { 'value': value }
    )

    ApiService.userRegister(data)
      .then(response => {

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
    const { registerModalOpened, toggleRegisterModalOpened } = this.props.context

    return (
      <Modal isOpen={registerModalOpened} toggle={toggleRegisterModalOpened}>
        <ModalHeader toggle={toggleRegisterModalOpened}>Register</ModalHeader>
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
              <Label for="mail">Email</Label>
              <Input type="email" required name="mail" id="mail" placeholder="Email" />
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

export default withAppContext(RegisterModal)
