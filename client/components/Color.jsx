import React from 'react'

const ColorLoading = (
  <div>
    <h2>Loading color ...</h2>
    <div>
      <img src='/getting-color.gif' className='swatch' />
    </div>
  </div>
)

const Color = props => {
  const ColorLoaded = (
    <div>
      <h2 style={{color: props.color}}>{props.color}</h2>
      <div
        className='swatch'
        style={{backgroundColor: props.color}} />
    </div>
  )

  return (
    <div className='color'>
      <p>
        <a href='#' onClick={() => {
          props.getNewColor()
        }}>Get anuhthuh kuhluh</a>
      </p>
      {props.gettingNewColor ? ColorLoading : ColorLoaded}
    </div>
  )
}

export default Color
