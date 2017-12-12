import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Home from 'components/Home'

import { getRandomColors } from './actions'
import makeSelectHome from './selector'

const mapStateToProps = createStructuredSelector({
  data: makeSelectHome('data'),
  sendingRequest: makeSelectHome('sendingRequest')
})

const mapDispatchToProps = {
  getRandomColors
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
