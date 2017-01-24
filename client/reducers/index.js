const INITIAL_STATE = {
  color: '',
  gettingNewColor: false
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'UPDATE_COLOR':
      newState.color = action.color
      newState.gettingNewColor = false
      return newState

    case 'REQUESTING_COLOR':
      newState.color = ''
      newState.gettingNewColor = true
      return newState

    default:
      return state
  }
}

export default reducer
