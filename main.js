var bar = document.getElementById('bar')
var nav = document.getElementById('navbar')
var close = document.getElementById('close')

var shopBag = document.getElementsByClassName('fa-shopping-bag')
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

var steve = document.getElementById('steve')

if (steve) {
    steve.addEventListener('click', () => {
        window.location.href = "./stevejobs.html"
    })
}
// addToCart.addEventListener('click', () => {
//     shopBag.style.

// })

// ============== Login.html ==========================
var form = document.getElementById('form')
var login = document.getElementById('form')
var username = document.getElementById('username')
var password = document.getElementById('password')
var loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click', () => {
    if (username.value == 'admin' && password.value == 'admin') {
        window.location.href = "./index.html"
    } else {
        alert('Invalid username or password')
    }
})