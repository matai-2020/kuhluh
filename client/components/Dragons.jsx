import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Dragons = (props) => (
  <div className='dragons'>
    <button onClick={ () => {
      props.requestImages('dragon')
    }}>
      Moar
    </button>

    <div className='dragon-collection'>
      {props.dragons.map( (dragon) => <img key={dragon.imgUrl} className='dragon' src={dragon.imgUrl} /> )}
    </div>
  </div>
)


const mapStateToProps = (state) => {
  return {
    dragons: state.dragons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestImages: (query) => { dispatch(actions.requestImages(query)) }
  }

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dragons)




