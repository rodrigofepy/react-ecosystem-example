import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { intlShape } from 'react-intl'

import messages from './messages'

class Home extends Component {
  componentDidMount() {
    this.props.getRandomColors()
  }

  render() {
    return <h1>{this.context.intl.formatMessage(messages.helloWorld)}</h1>
  }
}

Home.contextTypes = {
  intl: intlShape
}

Home.propTypes = {
  getRandomColors: PropTypes.func.isRequired
}

export default Home
