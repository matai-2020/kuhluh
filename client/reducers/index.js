const INITIAL_STATE = {
  color: '',
  gettingNewColor: false,
  isColorFormVisible: false
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'ADD_COLOR':
      newState.isColorFormVisible = true
      return newState

    case 'ADD_NEW_COLOR':
      newState.isColorFormVisible = false
      newState.color = action.color
      return newState

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
