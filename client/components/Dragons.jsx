import React from 'react'
import { connect } from 'react-redux'

const Dragons = (props) => (
  <div>
    {props.dragons.map( dragon => <div>{dragon.name}</div> )}
  </div>
)


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dragons)




