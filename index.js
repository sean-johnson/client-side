var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log("Here is the data: ", data.body) // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space'})

  function renderData () {
    console.log("Button was clicked!")
    console.log("Here is data object ", data)
    var newTarget = document.getElementById('renderedData')
    newTarget.innerHTML = greeting({tryMe: data.body})
  }

  var buttonClick = document.getElementById("renderBtn")
  buttonClick.addEventListener("click", renderData)


})
