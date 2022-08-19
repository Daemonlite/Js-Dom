const title = document.querySelector('#title')
const button = document.querySelector('#submit')

function header1(){
    title.style.fontFamily = 'courier'
}

title.addEventListener('mouseover',header1)

function submit (){
   button.innerText = 'logging in....'

}
button.addEventListener('click',submit)