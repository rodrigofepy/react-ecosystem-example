import styled from 'styled-components'

import { media } from 'styles'

const Wrapper = styled.main`
  position: relative;
  flex-direction: column;

  display: flex;

  margin: auto;
  width: 100%;
  min-height: inherit;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  ${media.tablet`
    width: 723px;
  `};

  ${media.desktop`
    width: 933px;
  `};

  ${media.widescreen`
    width: 1127px;
  `};
`

export default Wrapper
