import { arrayOf, bool, func, number, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { intlShape } from 'react-intl'

import ColorCard from './ColorCard'
import ColorCardListWrapper from './ColorCardListWrapper'
import messages from './messages'
import Wrapper from './Wrapper'

class Home extends Component {
  componentDidMount() {
    this.props.getRandomColors()
  }

  render() {
    return (
      <Wrapper>
        <h1>{this.context.intl.formatMessage(messages.helloWorld)}</h1>
        <ColorCardListWrapper>
          {this.props.data.colors.map(color => (
            <ColorCard key={color.id} hex={color.hex} tags={color.tags} />
          ))}
        </ColorCardListWrapper>
      </Wrapper>
    )
  }
}

Home.contextTypes = {
  intl: intlShape
}

Home.propTypes = {
  data: shape({
    colors: arrayOf(
      shape({
        hex: string.isRequired,
        id: number.isRequired
      })
    )
  }).isRequired,
  sendingRequest: bool.isRequired,
  getRandomColors: func.isRequired
}

export default Home
