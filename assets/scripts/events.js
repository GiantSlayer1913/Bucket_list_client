const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    // .then(() => onAutoSignIn(data))
    .catch(ui.signUpFailure)
}

// const onAutoSignIn = function (data) {
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .then(() => onGetMyNotes())
//     .catch(ui.signInFailure)
// }

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    // .then(() => onGetMyNotes(event))
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    // .then(() => onGetNotes(event))
    .catch(ui.signOutFailure)
}

const onChangePW = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

const createShows = (event) => {
  event.preventDefault()
  $('.user-message').text('')
  $('#createContent').show()
}

const onCreateTodo = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.data = data
  // console.log('data is: ', data)
  api.createTodo(data)
    .then(ui.createSuccess)
    .then(() => onGetMyTodos())
    .catch(ui.createFailure)
}

const onGetMyTodos = function () {
  api.getTodos()
    .then(ui.getMyTodosSuccess)
    .catch(ui.getMyTodosFailure)
}

// const onDestroyNote = (event) => {
//   event.preventDefault()
//   const noteId = $(event.target).closest('button').attr('data-id')
//   api.destroyNote(noteId)
//     .then(ui.destroyNoteSuccess)
//     .then(() => onGetMyNotes(event))
//     .catch(ui.destroyNoteFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.sign-out').on('click', onSignOut)
  $('#change_pass').on('submit', onChangePW)
  // $('#brand').on('click', onGetNotes)
  // $('.public-link').on('click', onGetNotes)
  // $('.all-todos').on('click', onGetMyNotes)
  // $('#myAllContent').on('submit', '.updating-note-form', onUpdateNote)
  $('.create-todo').on('click', createShows)
  // $('#myAllContent').on('click', '.destroy', onDestroyNote)
  $('#createForm').on('submit', onCreateTodo)
}

module.exports = {
  addHandlers
  // onGetNotes,
  // onGetMyNotes
}
