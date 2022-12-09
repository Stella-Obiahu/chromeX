let myLeads = []
const inputEl = document.getElementById("input-el")
const input = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

input.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value =" "
    renderLeads()
})
function renderLeads(){
    let listitems = " "
    for(let i = 0; i < myLeads.length; i++) {
        //this is how to add a <a> tag so it can navigate to another page
        //using target='_blank' makes your page open in another broswer
        listitems += 
         `<li>
            <a target = '_blank' href ='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listitems
}

