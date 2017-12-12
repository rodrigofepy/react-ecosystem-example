import styled from 'styled-components'

import { media } from 'styles'

const ColorCardListWrapper = styled.ul`
  flex-wrap: wrap;
  justify-content: center;

  display: flex;
  list-style: outside none none;

  margin: 0;
  width: 100%;
  padding: 0;

  ${media.tablet`
    justify-content: flex-start;
  `};
`

export default ColorCardListWrapper
