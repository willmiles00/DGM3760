let taskArea = document.querySelector('.taskArea')
let taskList = document.querySelector('#taskList')



// Function 1: Class + Constructor/Data Model
class ToDoItem{
    constructor(toDoID, toDoItem, toDoCategory, toDoDate)
    {
            this.ID = toDoID,
            this.task = toDoItem,
            this.complete = false,
            this.category = toDoCategory,
            this.date = toDoDate
    
    }
}
const newItem = new ToDoItem(0, "eat breakfast", "school", "tomorrow")

// Function 2: Add New Todo
function AddNewToDo(){
    const newListItem = document.createElement('li')
    newListItem.textContent = taskArea.value
    taskList.appendChild(newListItem)
}

taskArea.addEventListener('keypress', (Event) => {
    if (Event.key === "Enter"){
    AddNewToDo()
    }
})






