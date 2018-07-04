import React from 'react'
import {connect} from 'react-redux'

import {getNewColor} from '../actions'

import AddColor from './AddColor'

const ColorLoading = (
  <div>
    <h2>Loading duh kuhluh ...</h2>
    <div>
      <img src='/getting-color.gif' className='waiting' />
    </div>
  </div>
)

const ColorViewer = props => {
  const ColorLoaded = (
    <p>
      <div className='swatch' style={{backgroundColor: props.color}}>
        {props.color}
      </div>
    </p>
  )

  const specifier = props.color ? 'uhnuhthuh' : 'uh'
  const linkText = props.isWaitingOnApi ? '' : `Get ${specifier} kuhluh`

  return (
    <div className='color'>
      <p><a href='#' onClick={props.getNewColor}>{linkText}</a></p>
      <AddColor />
      {props.isWaitingOnApi ? ColorLoading : ColorLoaded}
    </div>
  )
}

const mapStateToProps = ({color, isWaitingOnApi}) => {
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
)(ColorViewer)
