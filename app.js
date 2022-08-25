var toDoListItem = document.getElementById("toDoList");


function addtodo(){
var toDoitem = document.getElementById("todo");

var li = document.createElement('li');
var liText = document.createTextNode(toDoitem.value);
li.appendChild(liText);
toDoListItem.appendChild(li);
toDoitem.value = "";
}