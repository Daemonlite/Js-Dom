//styling elements

const container=document.querySelector('#main-heading')
  container.style.color='red'
 console.log(container)

const list = document.querySelectorAll('.list-item')
console.log(list)

for(i=0; i < list.length; i++){
     list[i].style.fontSize = '5rem'
}


//creating elements

const ul = document.querySelector('ul')
const li = document.createElement('li')

//adding elements
ul.append(li)


//modifying a text
li.innerText='X-men'

// modifying attributes and classes

li.setAttribute('id','main-heading')
li.removeAttribute('id')

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'))
// remove item
li.classList.remove('list-item')
li.remove()
//checking the status
console.log(li.classList.contains('list-item'))