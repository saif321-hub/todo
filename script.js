const input=document.getElementById("input")
const form=document.getElementById("form")
const todos=document.getElementById("todos")
const del=document.getElementById("del")
const mark=document.getElementById("mark")
del.hidden=true
mark.hidden=true
//
form.addEventListener("submit",(e)=>{
    
    e.preventDefault() 
    addtodo()
    check(mark)
    check(del)
})



function addtodo(){
    const todoText=input.value
    if(todoText){
          const todoEl=document.createElement("li")
          todoEl.innerText=todoText
          todoEl.addEventListener('click',()=>{
              todoEl.classList.toggle("done")
          })
          todos.appendChild(todoEl)
          input.value=""
          todoEl.addEventListener("contextmenu",(e)=>{
            e.preventDefault() 
            todoEl.remove()
            check(mark)
            check(del)
          })
        }}
function check(elemnt){
    if(todos.childElementCount===0)
     elemnt.hidden=true
    else
    elemnt.hidden=false
}
//click the icon to delelte all todos
const head=document.querySelector("h1");
head.addEventListener('click',function () {
    todos.innerHTML=""
    input.value=""
})
