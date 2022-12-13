let myLeads = []
let oldleads = []
const inputEl = document.getElementById("input-el")
const input = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(leads){
    let listitems = " "
    for(let i = 0; i < leads.length; i++) {
        //this is how to add a <a> tag so it can navigate to another page
        //using target='_blank' makes your page open in another broswer
        listitems += 
         `<li>
            <a target = '_blank' href ='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listitems
}
deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
input.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value =" "
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)
})


