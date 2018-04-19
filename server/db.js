module.exports = {
  addColor,
  getColors,
  getColor
}

const waitTime = 2000

const colors = [{
  id: 1,
  name: 'DarkKhaki'
}, {
  id: 2,
  name: 'DarkSalmon'
}, {
  id: 3,
  name: 'DarkSlateGray'
}, {
  id: 4,
  name: 'DarkOrchid'
}, {
  id: 5,
  name: 'DarkCyan'
}, {
  id: 6,
  name: 'FireBrick'
}, {
  id: 7,
  name: 'Goldenrod'
}]

function getColors () {
  return colors
}

function getColor (callback) {
  const index = getRandom(colors.length)
  setTimeout(() => {
    callback(null, colors[index])
  }, waitTime)
}

function getRandom (max) {
  const random = Math.random() * max
  return Math.floor(random)
}

function addColor (color, callback) {
  const newColor = {
    id: colors.length + 1,
    name: color
  }
  setTimeout(() => {
    colors.push(newColor)
    callback(null)
  }, waitTime)
}
