import request from 'superagent'

export const TOGGLE_COLOR = 'TOGGLE_COLOR'
export const ADD_NEW_COLOR = 'ADD_NEW_COLOR'
export const UPDATE_COLOR = 'UPDATE_COLOR'
export const REQUESTING_COLOR = 'REQUESTING_COLOR'
export const SAVING_NEW_COLOR = 'SAVING_NEW_COLOR'
export const SAVED_NEW_COLOR = 'SAVED_NEW_COLOR'

export const getNewColor = () => {
  return dispatch => {
    dispatch(requestingColor())
    const target = `http://localhost:3000/color`

    request.get(target, (err, data) => {
      // eslint-disable-next-line no-console
      if (err) return console.error(err)

      const color = JSON.parse(data.text).name
      dispatch(receivingColor(color))
    })
  }
}

export const requestingColor = () => {
  return {
    type: REQUESTING_COLOR
  }
}

export const receivingColor = color => {
  return {
    type: UPDATE_COLOR,
    color
  }
}

export const toggleColorForm = () => {
  return {
    type: TOGGLE_COLOR
  }
}

export const addNewColor = color => {
  return dispatch => {
    dispatch(savingNewColor())
    const target = `http://localhost:3000/color`

    request.post(target)
      .send({color})
      .end((err, res) => {
        // eslint-disable-next-line no-console
        if (err) return console.error(err)
        dispatch(toggleColorForm())
        dispatch(savedNewColor(color))
      })
  }
}

export const savingNewColor = () => {
  return {
    type: SAVING_NEW_COLOR
  }
}

export const savedNewColor = color => {
  return {
    type: SAVED_NEW_COLOR,
    color
  }
}
