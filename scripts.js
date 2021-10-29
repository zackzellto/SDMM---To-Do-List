//A user can create a todo item by entering text into an input box and pressing a button


//A list of created todo items are shown on the screen
function showTaskInput(){

    const displayInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    const createUL = document.createElement("UL");
    const toDoLine = document.createTextNode(displayInput);
    createUL.appendChild(toDoLine);
    document.getElementById("newToDoLine").appendChild(createUL);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    createUL.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => deleteToDo(deleteButton));
}

//prevent page from refreshing on submit, delete or check-off button click/keypress.
deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    showTaskInput();
});

//A user can delete an existing todo  (for todos that have been marked as completed)
function deleteToDo(element) {
    element.parentElement.remove();
}


//When a todo item is marked as completed the text of the todo should ce crossed out (using strikethrough font)
function checkTaskButton(){
    let strikeTask = displayInput.strike();
    document.getElementById("userInput").textContent = strikeTask;
}

//Task displays when Enter key is pressed
var input = document.getElementById('userInput');
      window.addEventListener('keydown' , (enterKey) => {
          if (enterKey.key === 'Enter'){
              showTaskInput();
          }
        });
