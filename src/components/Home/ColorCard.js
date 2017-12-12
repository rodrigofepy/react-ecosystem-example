import { arrayOf, shape, string } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ColoredSquare = styled.div`
  height: 8rem;
  width: 8rem;

  background-color: #${props => props.hex};
`

const ColorName = styled.h2`
  margin: 0;
`

const Card = styled.li``

const ColorCard = ({ hex, tags }) => (
  <Card>
    <ColoredSquare hex={hex} />
    {/* <ColorName>{tags[0].name}</ColorName> */}
  </Card>
)

ColorCard.propTypes = {
  hex: string.isRequired,
  tags: arrayOf(
    shape({
      name: string.isRequired
    })
  ).isRequired
}

export default ColorCard
