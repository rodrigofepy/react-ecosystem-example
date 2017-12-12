import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

import * as components from './components'

const Wrapper = styled.div`
  display: flex;
  min-height: inherit;
  width: 100%;
`

const App = () => (
  <Wrapper>
    <BrowserRouter>
      <Switch>
        {/* Home page */}
        <Route exact path="/" component={components.HomePage} />

        {/* Not found page */}
        {/* <Route component={components.NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  </Wrapper>
)

export default App
