let todoList = [];

const addTodo = () => {
  let inputBox = document.querySelector('.js-input');
  let inputValue = inputBox.value;
  let inputDate = document.querySelector('.js-date-input');
  let dateValue = inputDate.value;

  todoList.push({
    name: inputValue, 
    date: dateValue});
  console.log(todoList);
 
  inputValue = '';
  dateValue = '';

  renderTodoList();
}
const renderTodoList = () => {
  let inputBox = document.querySelector('.js-input');
  let inputElement = inputBox.value;
  let listContainer = document.querySelector('.list-container');
  let listContainerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    let {name,date} = todoObject;
    let html = `
    <div>${name}</div>
    <div>${date}</div>
    <button class="buttons delete-btn" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    ">Delete</button>
    `
    ;
    listContainerHTML += html;
  }
  document.querySelector('.list-container').innerHTML = listContainerHTML;
  console.log(listContainerHTML);
}
const enterKey = () => {
  const enterKey = event.key; 
  if ( enterKey === 'Enter') {
    addTodo();
  }
}