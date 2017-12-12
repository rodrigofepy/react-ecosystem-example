import { connect } from 'react-redux'

import Home from 'components/Home'

import { getRandomColors } from './actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getRandomColors
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
