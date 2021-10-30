//A list of created todo items are shown on the screen
function showTaskInput(){
    const displayInput = document.getElementById("userInput").value;
    const createUL = document.createElement("UL");
    const toDoLine = document.createTextNode(displayInput);
    const deleteButton = document.createElement('button');
    const checkboxButton = document.createElement('button');

        document.getElementById("userInput").value = "";
        createUL.appendChild(toDoLine);
        document.getElementById("newToDoLine").appendChild(createUL);
        deleteButton.setAttribute("id", "delete-btn")
        createUL.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => deleteToDo(deleteButton));
        checkboxButton.setAttribute("class", "task-checkbox");
        createUL.appendChild(checkboxButton);
}

//Task displays when Enter key is pressed
let input = document.getElementById('userInput');
      window.addEventListener('keydown' , (enterKey) => {
          if (enterKey.key === 'Enter'){
              showTaskInput();
          }
        });

//clear all tasks from list w/ button click.

const clearTaskButton = document.querySelector('#clear-to-do-list');
clearTaskButton.addEventListener('click', () => deleteToDo(deleteButton));


//A user can delete an existing todo  (for todos that have been marked as completed)
function deleteToDo(e) {
    e.parentElement.remove();
}

//When a todo item is marked as completed the text of the todo should ce crossed out (using strikethrough font)





