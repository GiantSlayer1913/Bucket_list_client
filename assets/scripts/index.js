
'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events')

// $('.all-todos').hide()
// $('.create-todo').hide()
$('.sign-out').hide()
$('.a-change-pass').hide()
$('#createContent').hide()
$('#myAllContent').hide()
$('.user-message').text('Please Sign In/Sign Up if you would like to see your Bucket list')

$(() => {
  authEvents.addHandlers()
})
