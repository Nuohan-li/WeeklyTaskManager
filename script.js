
updateTime();

$(".button").on("click", function(){
    let day = $("#day-dropDown").val();
    switch(day){
        case "Monday":
            createTask("monday");
            break;
        case "Tuesday":
            createTask("tuesday");
            break;
        case "Wednesday":
            createTask("wednesday");
            break;
        case "Thursday":
            createTask("thursday");
            break;
        case "Friday":
            createTask("friday");
            break;
        case "Saturday":
            createTask("saturday");
            break;
        case "Sunday":
            createTask("sunday");
            break;
        case "Later":
            createTask("later");
    }
});

function createTask(weekday){
    let day = $("#day-dropDown").val();
    let task = $(".task-text").val();
    let memo = $(".memo-text").val();
    // create a div for newly added task and delete button
    let taskDiv = document.createElement("div");
    // create a new p for newly added task and append to the div 
    let taskP = document.createElement("p");
    taskP.innerHTML = task;
    taskP.style.display = "inline";

    // create a delete button for each task and add a function to remove the button's parent div, taskDiv
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.setAttribute("onclick", "$(this).parent('div').remove();");
    // append new task and delete button to the new div
    taskDiv.appendChild(taskP);
    taskDiv.appendChild(deleteBtn);
    // append taskDiv to the weekday div
    document.getElementsByClassName(weekday)[0].appendChild(taskDiv);
}


//Display current time to screen
function updateTime(){
    let time = new Date();
    $(".year").text(time.getFullYear());
    $(".month").text(time.getMonth() + 1);
    $(".date").text(time.getDate());
    
    $(".hour").text(time.getHours());
    $(".minute").text(time.getMinutes());
    $(".second").text(time.getSeconds());

    
    switch(time.getDay()){
        case 0:
            $(".weekday").text("  Sunday");
            break;
        case 1:
            $(".weekday").text("  Monday");
            break;
        case 2:
            $(".weekday").text("  Tuesday");
            break;
        case 3:
            $(".weekday").text("  Wednesday");
            break;
        case 4:
            $(".weekday").text("  Thursday");
            break;
        case 5:
            $(".weekday").text("  Friday");
            break;
        case 6:
            $(".weekday").text("  Satuday");
            break;
        
    }

    setTimeout(updateTime, 1000);
}

