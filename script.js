
updateTime();

$(".button").on("click", function(){
    let day = $("#day-dropDown").val();
    switch(day){
        case "Monday":
            createTask("monday", "dropdown1");
            break;
        case "Tuesday":
            createTask("tuesday", "dropdown2");
            break;
        case "Wednesday":
            createTask("wednesday", "dropdown3");
            break;
        case "Thursday":
            createTask("thursday", "dropdown4");
            break;
        case "Friday":
            createTask("friday", "dropdown5");
            break;
        case "Saturday":
            createTask("saturday", "dropdown6");
            break;
        case "Sunday":
            createTask("sunday", "dropdown7");
            break;
        case "Later":
            createTask("later", "dropdown8");
    }
});



function createTask(weekday, dropdown){
    let day = $("#day-dropDown").val();
    let task = $(".task-text").val();
    let memo = $(".memo-text").val();
    // create a new p for newly added task and append to the div 
    let taskP = document.createElement("p");
    taskP.classList.add(task);
    taskP.innerHTML = task;
    document.getElementsByClassName(weekday)[0].appendChild(taskP);
    // create a new option for the newly added task and append to the dropdown menu
    let option = document.createElement("option");
    option.text = task;
    document.getElementById(dropdown).appendChild(option);
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

