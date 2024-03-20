// Eventos 

// Obter o elemento

const addButton = document.getElementById('add-button')

// click

/* addButton.onclick = function () {
  console.log('clicked button')
} */

/* document.addEventListener('click', (e) => {
  console.log(e)
} )
 */

/* document.addEventListener('keydown', (e) => {
  console.log(e.key)
}) */

/* document.addEventListener('DOMContentLoaded', (e) => {
  console.log("Page loaded")
  // Manipular o DOM
})
 */

const handleHover = () => console.log("hovered over title")

const title = document.getElementsByTagName('h1')[0]

title.addEventListener('mousemove', handleHover)

//Remover event listeners

title.removeEventListener('mousemove', handleHover)


//Inputs e eventos:
/* const emailInput = document.getElementById('email-input')
console.log("email input value :", emailInput.value)

const sendEmailBtn = document.getElementById('send-email-btn')
sendEmailBtn.onclick = () => { console.log(emailInput.value)}

const emailParagraph = document.getElementById('current-value')

emailInput.onkeydown = () => {
  emailParagraph.innerText = emailInput.value
}
 */


const todoTitle = document.getElementById('todo-title')
const todoList = document.getElementById('todo-list')
const addTodoBtn = document.getElementById('add-todo')

/* const addTodoHandler = () => {
  const newTodo = document.createElement('li')
  newTodo.innerText = todoTitle.value
  todoList.appendChild(newTodo)
  todoTitle.value = ""

}
 */
const deleteTodo = (e) => e.target.parentNode.remove()

const addTodoHandler = () => {
  const newTodo = document.createElement('li');
  newTodo.innerHTML = todoTitle.value;

  const removeElementBtn = document.createElement('button');
  removeElementBtn.textContent = 'x';

  removeElementBtn.onclick = function() {
  this.parentNode.remove();
  };

  removeElementBtn.onclick = deleteTodo

  newTodo.appendChild(removeElementBtn);
  todoList.appendChild(newTodo);
  todoTitle.value = '';
  };
console.log(todoTitle.parentNode)

addTodoBtn.addEventListener('click', addTodoHandler)

// Alem de adicionar o texto ao Todo, adicionar um botão com um "x"
// Quando o botão é clickado, o Todo é removido
