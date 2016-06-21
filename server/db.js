module.exports = {
  getThings: getThings
}

var things = [{
  id: 1,
  name: 'Red thing'
}, {
  id: 2,
  name: 'Blue thing'
}, {
  id: 3,
  name: 'Yellow thing'
}]

function getThings () {
  return things
}
