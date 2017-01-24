module.exports = {
  getColors,
  getColor
}

var colors = [{
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
  }, 3000)
}

function getRandom (max) {
  const random = Math.random() * max
  return Math.floor(random)
}
