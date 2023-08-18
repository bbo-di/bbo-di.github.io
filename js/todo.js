const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const todoInput = toDoForm.querySelector('input');

const TODOSKEY = 'todos'

let toDos = []

function saveToDo(){ 
    localStorage.setItem(TODOSKEY,JSON.stringify(toDos))//JSON.stringify === javascript object나 array 또는 어떤 javascript 코드건 간에 string으로 만들어줌. (stringify === 변수 등을 문자열로 바꿈)
}

function deletetodo(event){
    const li = event.target.parentElement //해당 target의 부모 element
    console.log(li.id)
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id)) // filter는 foreach와 비슷함 filter는 걸러주는 역할
    li.remove();
    saveToDo(); //삭제된 arrary를 제외한 저장된 list를 다시 불러옴.
}

function paintToDo(newTodo){ //todo를 그리는 역할 ==> texta만 그리는 형태에서 obj로 그리는 형태로 바꿈.
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text; // text만 그릴때는 newTodo; obj로 그리게 되면서 newTodo.text;
    const button = document.createElement('button');
    button.addEventListener('click',deletetodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const todoobj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(todoobj);
    paintToDo(todoobj);
    saveToDo(); //saveToDo가 수행하는 오직 한가지 일은 toDos array를 localStorage에 집어넣는거임. saveToDo가 호출되는 시점에는 newTodo는 array에 들어있음.
}

toDoForm.addEventListener('submit',handleToDoSubmit)

const saveToDos = localStorage.getItem(TODOSKEY);
console.log(saveToDo);
if(saveToDos !== null){
    const parseToDos = JSON.parse(saveToDos) //JSON.parse는 문자열을 object 또는 array로 변환시켜줌.
    toDos = parseToDos;
    parseToDos.forEach(paintToDo); //forEach는 그 array에 있는 각각의 item에 대해서 실행시켜줌
}