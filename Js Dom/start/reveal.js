//Dom manipulation

//Event listeners

// click
const buttonTwo = document.querySelector('.btn-2')

function alertBtn(){
    alert('I also love javascript')
}

buttonTwo.addEventListener("click",alertBtn)

// mouseover

const button3 = document.querySelector('.btn-3')

function color(){
    button3.style.backgroundColor = 'blue'
}

button3.addEventListener("mouseover",color)

// revealing content
// dont forget to check the css with this

const revealbtn = document.querySelector('.reveal-btn')

const hiddenContent = document.querySelector('.hidden-content')


function revealContent(){
       if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
       }else{
        hiddenContent.classList.add('reveal-btn')
       }
}

revealbtn.addEventListener('click',revealContent)