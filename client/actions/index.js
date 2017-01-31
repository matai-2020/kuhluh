import request from 'superagent'

export const ADD_COLOR = 'ADD_COLOR'
export const ADD_NEW_COLOR = 'ADD_NEW_COLOR'
export const UPDATE_COLOR = 'UPDATE_COLOR'
export const REQUESTING_COLOR = 'REQUESTING_COLOR'

export const getNewColor = () => {
  return dispatch => {
    dispatch(requestingColor())
    console.log('getting new color')
    const target = `http://localhost:3000/color`

    request.get(target, (err, data) => {
      if (err) return console.error(err)

      const color = JSON.parse(data.text).name
      console.log('color:', color)

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
    type: ADD_COLOR
  }
}

export const addNewColor = color => {
  return {
    type: ADD_NEW_COLOR,
    color
  }
}
