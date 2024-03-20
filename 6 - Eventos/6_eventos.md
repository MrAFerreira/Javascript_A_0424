### Eventos

---

Os eventos são algo que acontece no documento HTML ao qual podemos reagir usando Javascript. Podem ser coisas como clicar num botão, uma página carregar ou até mesmo mover o rato.

Existem [muitos](https://www.w3schools.com/jsref/dom_obj_event.asp) eventos HTML, vamos ver alguns dos mais comuns.

### Obter o elemento DOM:

Vamos usar o seguinte exemplo de código HTML:

```html
<h1>Events</h1>
<div id="card"></div>
<button id="add-button">Click here!</button>

<script src="script.js"></script>
```

Para podermos reagir a um evento, precisamos de especificar _como_ vamos reagir.
Por exemplo, se quisermos acionar algo ao clicar num botão:

```javascript
//primeiro precisamos do elemento no DOM
let addButton = document.getElementById("add-button");

//Depois acedemos á propriedade onClick e passamos uma função
addButton.onclick = function () {
  console.log("adding an element to the list");
};
```

No exemplo acima, obtemos o elemento DOM que queríamos e adicionamos uma função à sua propriedade `onClick`. Esta função será activada sempre que o botão for clicado.

### | Event listeners e o objeto evento

---

Outra maneira de reagir a eventos é através de event listeners.  
Vamos adicionar um event listener a todo o documento para reagir sempre que que clicarmos em algo.

```javascript
document.addEventListener("click", e => {
  console.log(e);
});
```

O argumento `e` que está a ser passado para a função é a abreviatura de evento, e representa o **objeto evento**. Este objeto existe em cada evento e contém muitas informações sobre ele.
Uma das propriedades mais úteis é a `e.target` que representa onde o evento aconteceu (se clicarmos numa tag h1, num botão, etc), e a propriedade `e.target.value` que nos dá o valor do elemento que desencadeou o evento (por exemplo, o conteúdo do item em que acabámos de clicar).

```javascript
document.addEventListener("click", e => {
  console.log(e.target.value);
});
```

Também podemos utilizar funções nomeadas para os event listeners.

Alguns exemplos de eventos mais comuns:

```javascript
document.addEventListener("onkeydown", e => {
  console.log(e.key);
});

document.addEventListener("DOMContentLoaded", e => {
  console.log("page loaded");
});

const handleHover = () => console.log("hovered over the title");

const title = document.getElementsByTagName("h1")[0];
title.addEventListener("mouseover", handleHover);
```

### Remover um event listener

Também podemos remover um event listener adicionado anteriormente chamando o método `removeEventListener`:

```javascript
title.removeEventListener("mouseover", handleHover);
```

### | Manipulação de inputs

---

Vamos adicionar ao nosso ficheiro HTML:

```html
<label for="email">email</label>
<input
  name="email"
  type="email"
/>
<button id="send-email-btn">Send</button>
```

Para obter o valor de um input precisamos de o obter e depois verificar o seu atributo `value`.

```javascript
let input = document.getElementsByTagName("input")[0];
console.log(input.value);
```

Neste momento está vazio, normalmente só verificamos quando clicamos no botão:

```javascript
let sendButton = document.getElementById("send-email-btn");

sendButton.onclick = function () {
  console.log(input.value);
};
```

### | Criar uma todo list

---

Vamos adicionar o seguinte ao nosso ficheiro HTML:

```html
<div>
  <h2>Todo</h2>
  <input
    type="text"
    name="todo-title"
    id="todo-title"
  />
  <button id="add-todo">Add</button>
  <ul id="todo-list"></ul>
</div>
```

De seguida obtemos os elementos de DOM necessários:

```javascript
const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const todoTitle = document.getElementById("todo-title");
```

Podemos criar uma função de controlo para criar um novo elemento com o título da tarefa:

```javascript
const addTodoHandler = () => {
  const newTodo = document.createElement("li");
  newTodo.innerText = todoTitle.value;
  todoList.appendChild(newTodo);
  todoTitle.value = "";
};
```

Por fim, adicionamos a função ao botão:

```javascript
addTodo.addEventListener("click", addTodoHandler);
```

### Exercício :

- Além de adicionar o título da tarefa, adicionar um botão com um **X** dentro do `li`
- Criar uma função para que quando o botão for clicado ele remova a tarefa (todo o `li`)
- Anexar a função ao botão

Solução:

```javascript
const deleteTodo = e => {
  e.target.parentNode.remove();
};

const addTodoHandler = () => {
  const newTodo = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.onclick = deleteTodo;
  newTodo.innerText = todoTitle.value;
  newTodo.appendChild(deleteButton);
  todoList.appendChild(newTodo);
  todoTitle.value = "";
};
```
