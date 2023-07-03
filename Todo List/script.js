// ==========================Add live date========================
let header = document.querySelector('.header')
const dt = new Date()
date = String(dt.getDate())
month = String(dt.getMonth()+1)
year = String(dt.getFullYear())
let newtest = document.createElement("h3")
let val = document.createTextNode("Todo List "+date+"-"+month+"-"+year)
// newtest.style.marginLeft = "4px"
newtest.append(val)
header.appendChild(newtest) 
// ==========================================================
let table_body = document.querySelector(".table_body")

function add(){
    let task = document.querySelector(".t_name").value
    let description = document.querySelector(".t_description").value
    let new_row = document.createElement("tr")
    let priority = document.querySelector("#priority-input").value
    console.log("priority-input-->>"+priority)
    // let High = document.querySelector('.high')
    // let Medium = document.querySelector('.medium')
    // let Low = document.querySelector('.low')
    if(task!="" && description!="")
    {
        if(priority=="High"){ 
            new_row.innerHTML='<td style="height: 50px;" class="task_priority" ><select name="priority" id="priority" value="'+priority+'" class="disableEdit" style="width: 10%; width: 80%;" disabled><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option></select></td><td style="height: 50px;" class="task_name">'+task+'</td><td style="height: 50px;" class="task_description">'+description+'</td><td style="height: 50px;width: 5%;"><select class="status"><option>Open</option><option>Completed</option></select></td><td style="height: 50px;width: 5%;"><button id="delete" onclick="deleteRow(this);"><span class="material-symbols-outlined">delete</span></button></td><td style="height: 50px;width: 5%;"><button id="lock" onclick="lockHandle(this)"><span class="material-symbols-outlined">lock</span></button></td>'
            new_row.querySelector("#priority").value=priority
            console.log("High selected-->"+new_row)
            table_body.appendChild(new_row)
            document.querySelector(".t_name").value = ""
            document.querySelector(".t_description").value = ""
        }else if(priority=="Medium"){
            new_row.innerHTML='<td style="height: 50px;" class="task_priority" ><select name="priority" id="priority" value="'+priority+'" class="disableEdit" style="width: 10%; width: 80%;" disabled><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option></select></td><td style="height: 50px;" class="task_name">'+task+'</td><td style="height: 50px;" class="task_description">'+description+'</td><td style="height: 50px;width: 5%;"><select class="status"><option>Open</option><option>Completed</option></select></td><td style="height: 50px;width: 5%;"><button id="delete" onclick="deleteRow(this);"><span class="material-symbols-outlined">delete</span></button></td><td style="height: 50px;width: 5%;"><button id="lock" onclick="lockHandle(this)"><span class="material-symbols-outlined">lock</span></button></td>'
            new_row.querySelector("#priority").value=priority
            console.log("Medium selected-->"+new_row)
            table_body.appendChild(new_row)
            document.querySelector(".t_name").value = ""
            document.querySelector(".t_description").value = ""
        }else{
            new_row.innerHTML='<td style="height: 50px;" class="task_priority" ><select name="priority" id="priority" value="'+priority+'" class="disableEdit" style="width: 10%; width: 80%;" disabled><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option></select></td><td style="height: 50px;" class="task_name">'+task+'</td><td style="height: 50px;" class="task_description">'+description+'</td><td style="height: 50px;width: 5%;"><select class="status"><option>Open</option><option>Completed</option></select></td><td style="height: 50px;width: 5%;"><button id="delete" onclick="deleteRow(this);"><span class="material-symbols-outlined">delete</span></button></td><td style="height: 50px;width: 5%;"><button id="lock" onclick="lockHandle(this)"><span class="material-symbols-outlined">lock</span></button></td>'
            new_row.querySelector("#priority").value=priority
            console.log("Low selected-->"+new_row)
            table_body.appendChild(new_row)
            document.querySelector(".t_name").value = ""
            document.querySelector(".t_description").value = ""
        }
    }
    
}
// ===========================Delete script==================
function deleteRow(el){
    if(!confirm("Are you sure you want to delete?")) return;
    
    var tbl = el.parentNode.parentNode.parentNode
    var row = el.parentNode.parentNode.rowIndex
    console.log("tbl---->"+tbl)
    console.log("row---->"+row)

    tbl.deleteRow(row-1)
}
// ============================Lock/Unlock====================
let lockClass = '<span class="material-symbols-outlined">lock</span>'
let unlockClass = '<span class="material-symbols-outlined">lock_open</span>'

function lockHandle(el){
    let lockelement = el.querySelector("span")
    let taskName = el.parentNode.parentNode.querySelector(".task_name")
    let taskDescription = el.parentNode.parentNode.querySelector(".task_description")
    let priority_lock = el.parentNode.parentNode.querySelector(".disableEdit")
    let new_prio = priority_lock.parentNode
    if(lockelement.innerHTML==='lock'){
        lockelement.innerHTML='lock_open'
        taskName.contentEditable = true
        taskDescription.contentEditable = true
        priority_lock.disabled=false
    }else{
        lockelement.innerHTML='lock'
        taskName.contentEditable= "false"
        taskDescription.contentEditable= "false"
        priority_lock.disabled=true
        // new_prio.value = 
    }
}
// ===================filter by priority========================
let tableBody = document.querySelector("tbody")

function highFilter(el){
    input = el.innerHTML
    let allTasks = tableBody.querySelectorAll('tr')
    // console.log(allTasks)
    if(input != "All")
    {
        for(let i=0;i<allTasks.length;i++){
            console.log("1--->"+allTasks[i].querySelector("#priority").value)
            if (allTasks[i].querySelector("#priority").value != input){
                allTasks[i].style.display="none"
            }
            else{
                allTasks[i].style.removeProperty("display")
            }
        }
    }
    else{
        for(let i=0;i<allTasks.length;i++){
            allTasks[i].style.removeProperty("display")
        }
    }
    
    console.log(allTasks)
    
}