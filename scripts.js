//A user can create a todo item by entering text into an input box and pressing a button


//A list of created todo items are shown on the screen
function showTaskInput(){

    const displayInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    const newPara = document.createElement("p");
    //newPara.setAttribute('id', '')
    const toDoLine = document.createTextNode(displayInput);
    newPara.appendChild(toDoLine);
    document.getElementById("newToDoLine").appendChild(newPara);

}

//A user can delete an existing todo  (for todos that have been marked as completed)
function deleteTaskButton(){
    const toDoPara = document.querySelectorAll('p');
    document.createElement("button");
    document.getElementById("deleteTaskBtn").innerHTML = "";
    toDoPara.appendChild("deleteTaskBtn");
}

//When a todo item is marked as completed the text of the todo should ce crossed out (using strikethrough font)
function checkTaskButton(){
    var strikeTask = displayInput.strike();
    document.getElementById("userInput").innerHTML = strikeTask;
}











