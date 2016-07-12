import request from 'superagent'

export const UPDATE_IMAGES = 'UPDATE_IMAGES'

export const requestImages = (query) => {
  return (dispatch) => {
    console.log('getting dragons')
    const target = `https://pixabay.com/api/?q=${query}&key=2789043-ba8806a0b1d6fd8a1d355061d`

    request.get(target, (err, data) => {
      if (err) console.error(err)

      const dragonImgUrls = JSON.parse(data.text).hits.map( hit => {
        return hit.webformatURL
      })

      console.log('dragons', dragonImgUrls)
      
      dispatch(receiveImages(dragonImgUrls))
    })

  }
}

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
export const receiveImages = (imgUrls) => {
  return {
    type: UPDATE_IMAGES,
    imgUrls
  }
}



