const store = require('./store')

// const showNotesTemplate = require('./templates/note-listing.handlebars')

// const showMyNotesTemplate = require('./templates/my-note-listing.handlebars')

// const eve = require('./events.js')
// const api = require('./api.js')

const signUpSuccess = (data) => {
  $('#modal1').modal('toggle')
  // $('.modal').modal('hide')
  $('.user-message').text('Welcome to TPad expirience! Please sign in to start!')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signUpFailure = () => {
  // $('.failedmessage1').text('Failed to Sign Up')
  setTimeout(() => $('.failedmessage1').text('Failed to Sign Up'), 300)
}

// const autoSignInSuccess = (data) => {
//   // console.log(data)
//   $('#modal1').modal('hide')
//   store.user = data.user
//   $('.user-message').text('Your Personal TPad welcomes you')
//   setTimeout(() => $('.user-message').text(''), 5000)
//   $('input[type=text]').val('')
//   $('input[type=password]').val('')
//   $('.a-sign-up').hide()
//   $('.a-sign-in').hide()
//   $('.public-link').show()
//   $('.my-notes').show()
//   $('.sign-out').show()
//   $('.a-change-pass').show()
// }

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(data)
  $('.user-message').text('Your Personal TPad welcomes you')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('#modal2').modal('hide')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('.a-sign-up').hide()
  $('.a-sign-in').hide()
  $('.public-link').show()
  $('.my-notes').show()
  $('.sign-out').show()
  $('.a-change-pass').show()
}

const signInFailure = () => {
  $('.failedmessage2').text('Failed to Sign In')
}

const changePWSuccess = () => {
  $('.user-message').text('Your Password was changed successfully')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('#modal3').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const changePWFailure = () => {
  $('.failedmessage3').text('Failed to Change Password')
}

const signOutSuccess = () => {
  $('.user-message').text('Please come back again!')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('.a-sign-up').show()
  $('.a-sign-in').show()
  $('.public-link').hide()
  $('.my-notes').hide()
  $('.sign-out').hide()
  $('.a-change-pass').hide()
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#createForm')[0].reset()
  $('.failedmessage1').text('')
  $('.failedmessage2').text('')
  store.user = null
}

const signOutFailure = () => {
  $('.user-message').text('Your Weren\'t able to Sign Out')
  setTimeout(() => $('.user-message').text(''), 5000)
}

// const getNotesSuccess = (data) => {
//   store.notes = data.notes
//   $('.personal').hide()
//   $('#createContent').hide()
//   $('.public').show()
//   const showNotesHtml = showNotesTemplate({
//     notes: store.notes.sort(function (a, b) {
//       return b.id - a.id
//     }) })
//   $('#allContent').html(showNotesHtml)
// }
//
// const getNotesFailure = () => {
//   $('.message').text('Sorry public notes are not available at the moment')
// }

// const getMyNotesSuccess = (data) => {
//   // console.log(data.user.notes)
//   $('.public').hide()
//   $('#createContent').hide()
//   $('.personal').show()
//   const showNotesHtml = showMyNotesTemplate({
//     notes: data.user.notes.sort(function (a, b) {
//       return b.id - a.id
//     }) })
//   $('#myAllContent').html(showNotesHtml)
//   if (data.user.notes.length === 0) {
//     $('#myAllContent').html('<h2>Hey, you dont have any notes, create some!</h2>')
//   }
// }

// const getMyNotesFailure = () => {
//   $('.user-message').text('Sorry, but your notes are not available at the moment')
//   setTimeout(() => $('.user-message').text(''), 5000)
// }
//
// const updateNoteSuccess = () => {
//   $('.user-message').text('Your note was updated')
//   setTimeout(() => $('.user-message').text(''), 5000)
//   $('.modal').modal('hide')
//   // console.log('update worked')
// }
//
// const updateNoteFailure = () => {
//   $('.user-message').text('Sorry, but you are not able to update your note at the moment')
//   setTimeout(() => $('.user-message').text(''), 5000)
// }
//
// const createSuccess = () => {
//   $('#createForm')[0].reset()
//   $('.user-message').text('Note was Created succesfully')
//   setTimeout(() => $('.user-message').text(''), 5000)
// }
//
// const createFailure = () => {
//   $('.user-message').text('Sorry, but you are not able to create your note at the moment')
//   setTimeout(() => $('.user-message').text(''), 5000)
// }
//
// const destroyNoteSuccess = () => {
//   $('.user-message').text('Note was Deleted succesfully')
//   setTimeout(() => $('.user-message').text(''), 5000)
// }
//
// const destroyNoteFailure = () => {
//   $('.user-message').text('Sorry, but you are not able to delete your note at the moment')
//   setTimeout(() => $('.user-message').text(''), 5000)
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
  // getNotesSuccess,
  // getNotesFailure,
  // getMyNotesSuccess,
  // getMyNotesFailure,
  // updateNoteSuccess,
  // createSuccess,
  // createFailure,
  // updateNoteFailure,
  // destroyNoteSuccess,
  // destroyNoteFailure,
  // autoSignInSuccess
}
