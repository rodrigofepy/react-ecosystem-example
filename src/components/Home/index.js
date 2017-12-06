import React from 'react'
import { intlShape } from 'react-intl'

import messages from './messages'

const Comp = (props, context) => (
  <h1>{context.intl.formatMessage(messages.helloWorld)}</h1>
)

Comp.contextTypes = {
  intl: intlShape
}

export default Comp
