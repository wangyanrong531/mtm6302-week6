console.log("JS file added")

const bodyTag = document.querySelector("body")

bodyTag.innerHTML +=`
<section id="groceries">
    <h2>Groceries</h2>
    <ul id="groceryList"></ul>
    </section>
    `

let groceryItems =["apple","bananas","milk","eggs","bread","dog food"]
const groceryUl= document.getElementById("groceryList")

//what do we want, from we can get it?  // for what coming from where
for(item of groceryItems){
    //console.log(item)
    groceryUl.insertAdjacentHTML("beforeend",`<li>${item}</li>`)
}

function addItem(newItem){
    if(newItem !==""){
     groceryUl.insertAdjacentHTML("afterbegin",`<li>${newItem}</li>`)   
    }

}

//use the function form console addItem("chocolate")

//adding HTML using createElement and appendChild

const section = document.createElement('section')
section.id= "todo"
section.innerHTML = "<h2>Todo List</h2>"

bodyTag.appendChild(section) //在browser里显示出来的。
