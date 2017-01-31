import { connect } from 'react-redux'

import { getNewColor } from '../actions'
import Color from '../components/Color'

const mapStateToProps = ({ color, isWaitingOnApi }) => {
  return {
    color,
    isWaitingOnApi
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNewColor: () => { dispatch(getNewColor()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color)
