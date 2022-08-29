let taskDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")
let errorToast = document.querySelector('.error')
let successToast = document.querySelector(".success")
let deleteSpan
let check

const addHTML=(todo)=>{
    let liDOM=document.createElement("li")
    liDOM.setAttribute('id','liID')

    let span= document.createElement('span')
    let text=document.createTextNode('\u00D7')
    span.classList.add('close')
    span.setAttribute('id','spanID')
    span.appendChild(text)
   
    liDOM.innerHTML=todo.text
    liDOM.appendChild(span)

    listDOM.append(liDOM)
}

const startConfig= () => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(!todos){
        localStorage.setItem("todos",JSON.stringify([]))
    }else{
        todos.forEach(todo => {
            addHTML(todo)
        });
        deleteSpan=document.querySelectorAll("#spanID")
        check=document.querySelectorAll("#liID")
    }
}

startConfig()

function newElement() {
    todoText=taskDOM.value.trim()

    if(todoText !=0){
        const todo= {
            text: todoText,
            isCompleted: false
        }
    
        const todos=JSON.parse(localStorage.getItem("todos"))
        todos.push(todo)
        localStorage.setItem("todos",JSON.stringify(todos))
           
        addHTML(todo)
      
        new bootstrap.Toast(successToast).show()
    }else{
        new bootstrap.Toast(errorToast).show()
    }     
}
    
    
const deleteTodo=(e)=>{
    const todo=e.target.parentElement
    const text=todo.firstChild.textContent
    
    let todos=JSON.parse(localStorage.getItem("todos"))
    todos=todos.filter(td => td.text!=text)
    localStorage.setItem("todos",JSON.stringify(todos))
    
    todo.remove()
}

const doneElement= (e) => {
    const todo=e.target
    const text=todo.firstChild.textContent

    let todos=JSON.parse(localStorage.getItem("todos"))
    todos.forEach(td=>
        {
           if(td.text===text){
                td.isCompleted=!td.isCompleted
               
    
           }

        })
    localStorage.setItem("todos",JSON.stringify(todos))
}
deleteSpan.forEach(item=>item.addEventListener("click",deleteTodo))
check.forEach(item=>item.addEventListener("click",doneElement))