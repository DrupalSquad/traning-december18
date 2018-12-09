import React, { Component } from 'react';
import Emoji from 'react-emoji-render'

export default class extends Component {
  render = () => (
    <footer>
      <hr />
      <Emoji text="Made with ❤️in DrupalSquad" />
    </footer>
  )
}
