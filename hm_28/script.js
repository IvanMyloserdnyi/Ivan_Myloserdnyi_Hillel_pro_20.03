const form = document.querySelector('.form')
const input = document.querySelector('.input')
const button = document.querySelector('.button')

/*let body = document.body
const form = body.appendChild(document.createElement('form'))
const input = form.appendChild(document.createElement('input')).placeholder = 'Enter the url'
const button = form.appendChild(document.createElement("button")).innerText = 'Go'*/

//Uncaught TypeError: button.addEventListener is not a function

const http = 'http://'
const https = 'https://'
let url;
button.addEventListener('click',isHttps)
function isHttps() {
    if (input.value.slice(0,7) !== http&&input.value.slice(0,8) !== https) {
        url = https + input.value
        form.action = url;
    }
    else {
        form.action = input.value
    }
}
