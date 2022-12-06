let myLeads = ["mhu.com", "dythr.org","yyhbb.i"]
const inputEl = document.getElementById("input-el")
const input = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

input.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++) {
     ulEl.innerHTML +=  "<li>" + myLeads[i] + "</li> "
}

