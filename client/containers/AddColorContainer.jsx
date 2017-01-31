import { connect } from 'react-redux'

import { toggleColorForm, addNewColor } from '../actions'
import AddColor from '../components/AddColor'

const mapStateToProps = ({ isColorFormVisible, isWaitingOnApi }) => {
  return {
    isColorFormVisible,
    isWaitingOnApi
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showColorForm: () => { dispatch(toggleColorForm()) },
    addNewColor: newColor => { dispatch(addNewColor(newColor)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddColor)
