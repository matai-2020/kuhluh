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

  return (
    <div className='add-color'>
      {props.isColorFormVisible ? form : link}
    </div>
  )
}

export default AddColor
