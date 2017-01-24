const INITIAL_STATE = {
  dragons: [{
    imgUrl: 'https://pixabay.com/get/eb36b9062bf51c2ad65a5854e44b4e9fe373e1c818b5174791f8c87ba5ee_640.jpg'
  }]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGES':
      const newState = Object.assign({}, state, {
        dragons: action.imgUrls.map((url) => {
          return {imgUrl: url}
        })
      })
      console.log('newState', newState)
      return newState

    default:
      return state
  }
}

export default reducer
