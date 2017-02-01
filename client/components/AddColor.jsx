import React from 'react'

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

export default AddColor
