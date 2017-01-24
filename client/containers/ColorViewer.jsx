import { connect } from 'react-redux'

import { getNewColor } from '../actions'
import Color from '../components/Color'

const mapStateToProps = state => {
  return {
    color: state.color,
    gettingNewColor: state.gettingNewColor
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
