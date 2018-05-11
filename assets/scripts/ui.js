const store = require('./store')

const showMyTodosTemplate = require('./templates/my-todo-listing.handlebars')

// const eve = require('./events.js')
// const api = require('./api.js')

const signUpSuccess = (data) => {
  $('#modal1').modal('toggle')
  // $('.modal').modal('hide')
  $('.user-message').text('Welcome to Team Tomorrow\'s Bucket List Application! Please sign in to start!')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signUpFailure = () => {
  // $('.failedmessage1').text('Failed to Sign Up')
  setTimeout(() => $('.failedmessage1').text('Failed to Sign Up'), 300)
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(data)
  $('.user-message').text('Welcome to your bucket list!')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('#modal2').modal('hide')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('.a-sign-up').hide()
  $('.a-sign-in').hide()
  $('#myAllContent').show()
  $('#createContent').show()
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
  $('.sign-out').hide()
  $('.a-change-pass').hide()
  $('#myAllContent').hide()
  $('#createContent').hide()
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

const getMyTodosSuccess = (data) => {
  const myTodos = []
  data.todos.forEach((el) => {
    if (el.owner === store.user._id) {
      if (el.completed === false) {
        myTodos.unshift(el)
      }
    }
  })
  // console.log(myTodos)
  const showTodosHtml = showMyTodosTemplate({
    todos: myTodos
    // .sort(function (a, b) {return b.id - a.id})
  })
  $('#myAllContent').html(showTodosHtml)
  if (myTodos.length === 0) {
    $('#myAllContent').html('<h2>You\'ve got nothing on your list!</h2>')
  }
}

const getMyTodosFailure = () => {
  $('.user-message').text('Sorry, but your list is not available at the moment')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const updateTodoSuccess = () => {
  $('.user-message').text('Your Todo was updated')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('.modal').modal('hide')
  // console.log('update worked')
}

const updateTodoFailure = () => {
  $('.user-message').text('Sorry, but you are not able to update your todo at the moment')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const completeTodoSuccess = () => {
  $('.user-message').text('Your Todo was completed')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('.modal').modal('hide')
  // console.log('update worked')
}

const completeTodoFailure = () => {
  $('.user-message').text('Sorry, but you are not able to conplete your todo at the moment')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const createSuccess = () => {
  $('#createForm')[0].reset()
  $('.user-message').text('Added to your list')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const createFailure = () => {
  $('.user-message').text('Sorry, but you are not able to add to your list at the moment')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const destroyTodoSuccess = () => {
  $('.user-message').text('Your bucket list todo was Deleted succesfully')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const destroyTodoFailure = () => {
  $('.user-message').text('Sorry, but you are not able to delete your bucket list todo at the moment')
  setTimeout(() => $('.user-message').text(''), 5000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure,
  getMyTodosSuccess,
  getMyTodosFailure,
  updateTodoSuccess,
  createSuccess,
  createFailure,
  updateTodoFailure,
  destroyTodoSuccess,
  destroyTodoFailure,
  completeTodoFailure,
  completeTodoSuccess
}
