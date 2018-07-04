import React from 'react'
import {connect} from 'react-redux'

import {toggleColorForm, addNewColor} from '../actions'

let colorName = null

const AddColor = props => {
  const link = (
    <a href='#' onClick={props.showColorForm}>Add uh kuhluh</a>
  )

  const form = (
    <p>
      New kuhluh: {' '}
      <input type='text' ref={elem => { colorName = elem }} /> {' '}
      <button onClick={() => props.addNewColor(colorName.value)}>Add</button>
    </p>
  )

  const control = props.isColorFormVisible ? form : link

  return (
    <div className='add-color'>
      {props.isWaitingOnApi ? null : control}
    </div>
  )
}

const mapStateToProps = ({isColorFormVisible, isWaitingOnApi}) => {
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
