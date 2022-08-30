var toDoListItem = document.getElementById("toDoList");


function addtodo(){
var toDoitem = document.getElementById("todo");

// create a list
var li = document.createElement('li');
var liText = document.createTextNode(toDoitem.value);
li.appendChild(liText);
toDoListItem.appendChild(li);
toDoitem.value = "";
li.setAttribute('class','list-item')


// add a delete button
var del = document.createElement("BUTTON");
var delTxt = document.createTextNode('Delete');
del.setAttribute("onclick","deletToDo(this)")
del.appendChild(delTxt);
li.appendChild(del);
del.setAttribute("class",'delbtn');


// add an edit button
var editbtn = document.createElement("BUTTON");
var editTxt = document.createTextNode("Edit");
editbtn.setAttribute("onclick","editToDo(this)");
editbtn.appendChild(editTxt);
li.appendChild(editbtn);
editbtn.setAttribute("class",'edit-btn');

}

// delet button 
function deletToDo(d){
    d.parentNode.remove();
    
}

// edit button

function editToDo(e){
     var userInput = prompt("Enter New To Do",e.parentNode.firstChild.nodeValue);
     e.parentNode.firstChild.nodeValue = userInput;
    
}
// delete all button ----
function deleteAll(){
    toDoListItem.innerHTML = "";
}


