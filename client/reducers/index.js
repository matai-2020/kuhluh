const INITIAL_STATE = {
  color: '',
  isWaitingOnApi: false,
  isColorFormVisible: false
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'TOGGLE_COLOR':
      newState.isColorFormVisible = !newState.isColorFormVisible
      return newState

    case 'ADD_NEW_COLOR':
      newState.isColorFormVisible = false
      newState.color = action.color
      return newState

    case 'SAVING_NEW_COLOR':
      newState.isWaitingOnApi = true
      return newState

    case 'SAVED_NEW_COLOR':
      newState.isWaitingOnApi = false
      newState.color = action.color
      return newState

    case 'UPDATE_COLOR':
      newState.color = action.color
      newState.isWaitingOnApi = false
      return newState

    case 'REQUESTING_COLOR':
      newState.color = ''
      newState.isWaitingOnApi = true
      return newState

    default:
      return state
  }
}

export default reducer
