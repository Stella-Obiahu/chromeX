let myLeads = []
const inputEl = document.getElementById("input-el")
const input = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

input.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
})
function renderLeads(){
    let listitems = " "
    for(let i = 0; i < myLeads.length; i++) {
        listitems +=  "<li>" + myLeads[i] + "</li> "
    }
    ulEl.innerHTML = listitems

}

