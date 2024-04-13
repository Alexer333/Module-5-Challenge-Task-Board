// Retrieve tasks and nextId from localStorage
let taskList = JSON.stringify(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// The modal code stuff...
    //Get Modal
var modal = document.getElementById("openMO");
    //Open Modal Button
var btn = document.getElementById("btn btn-successs")
    //Close Modal
var span = document.getElementsByClassName("submit")[0];

let userTasks = 0;




//     //On click open modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

const taskStatus = {
    todo: 'to-do',
    prog: 'in-progress',
    done: 'done'
};

    //Close when click outside modal...
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}



// Todo: create a function to generate a unique task id
function generateTaskId() {
    return keyGenerator(new Date());
}

const addTaskBtn = $('.btn');
const lemodal = $('.modal');
const saveBtn = $('.save-btn');



// Todo: create a function to create a task card
function createTaskCard(task) {

    let cardStat = {
        class: '',
        id: task, 
        status: task
    };

        const stringCard = localStorage.getItem('userTasks');
        const newCards = JSON.parse(stringCard) || [];
        const placement = $('#todo-cards');

    if(newCards) {
        for (i = 0 && newCards.length != null && newCards.length === 0; i < newCards.length; i++) {
            let div = document.createElement('div');
            let cardTitle = document.createElement('div');
            let cardDesc = document.createElement('div');
            let cardDue = document.createElement('div');

            cardTitle.setAttribute("id", "task");
            cardDesc.setAttribute("id", "desc");
            cardDue.setAttribute("id", "date");

            cardTitle.textContent = newCards[i].Title;
            cardDesc.textContent = newCards[i].Description;
            cardDue.textContent = newCards[i].DueDate;

            div.appendChild(cardTitle);
            div.appendChild(cardDesc);
            div.appendChild(cardDue);
            placement.appendChild(div);

            console.log(cardTitle);
            console.log(cardDesc);
            console.log(cardDue);
        }
    }
    

    $('btn').on(`click`, function() {
        let stringTasks = localStorage.getItem('userTasks');
        let userTasks = JSON.parse(stringTasks) || [];

        const formData = {
            Title: $('#title').val(), 
            Description: $('#description').val(), 
            DueDate: $('#due-date').val()
        }

        userTasks.push(formData);
        localStorage.setItem('userTasks', JSON.stringify(userTasks));
        console.log(localStorage.getItem('userTasks'));
    })

}

createTaskCard();

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    
    let tasks = getItem('tasks');
    if (!tasks || tasks.length == 0) {
        return;
    }

    tasks.forEach(task => {
    let card = createTaskCard(task);
card.draggable({
    containment: '#taskboard',
    revert: "invalid",
    snap: true,
    snapMode: "inner"
    });

    switch (task.status){
            case taskStatus.todo:
                todo.append(card);
                break;
            case taskStatus.prog:
                inProgress.append(card);
                break;
            case taskStatus.done:
                done.append(card);
                break;

            default: 
                break;
        }
    }
)
}



// Todo: create a function to handle adding a new task
function handleAddTask(){
    // document.getElementById("todo-cards").innerHTML += "<tr><td>str</td></tr>";



}





// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    // let byeTask = document.removeElement(`div`);
    
}



// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}



// Todo: when the page loads, render the task list, add event listeners, make lanes droppable
$(document).ready(function () {
    localStorage.getItem(userTasks);



});
