const validator = require('validator')
const multi = require("./filenew.js")
const notes = require("./notes.js")

multiply = multi(4,6)

console.log(multiply)

msg = notes("sonu")

console.log(msg)

console.log(validator.isURL('https//pooja.io'))

