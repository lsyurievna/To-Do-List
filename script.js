const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Please add a task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
}

function listCheckRemove (e) {
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}


listContainer.addEventListener("click",listCheckRemove, false);

