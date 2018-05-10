const config = require('./config')

const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out/', // + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePW = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
//
const getTodos = function () {
  return $.ajax({
    url: config.apiUrl + '/todos/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getMyNotes = function () {
//   return $.ajax({
//     url: config.apiUrl + '/users/' + store.user.id,
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

// const updateNote = function (data, noteId) {
//   return $.ajax({
//     url: config.apiUrl + '/notes/' + noteId,
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const createTodo = function (data) {
  // console.log(data)
  // console.log(store)
  return $.ajax({
    url: config.apiUrl + '/todos',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'todo': {
        'title': data.todo.title,
        'text': data.todo.text,
        'location': data.todo.location,
        'completed': false
      }
    }
  })
}

// const destroyNote = function (noteId) {
//   return $.ajax({
//     url: config.apiUrl + '/notes/' + noteId,
//     method: 'DELETE',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePW,
  getTodos,
  // getMyNotes,
  // updateNote,
  createTodo
  // destroyNote
}
