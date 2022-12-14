const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')
const todoForm = document.querySelector('#todo-form')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(e) {
    e.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요, ${username}님. 반가워요!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    todoForm.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
// 로컬 스토리지 확인이 첫번째 시작

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    paintGreetings(savedUsername)
}
