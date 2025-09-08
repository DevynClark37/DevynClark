const caseStudies = document.getElementsByClassName("studyLink");

const yourStudies = Array.from(caseStudies);
console.log(yourStudies)
yourStudies.forEach(study => {
study.addEventListener("click", (event) =>{
const storiedStudy = event.target.id;
localStorage.clear();

localStorage.setItem("chosenStudy", storiedStudy);

console.log(storiedStudy);
});
});

var dropdown = document.getElementsByClassName("dropdown")
var tools = document.getElementById("tools");
var services = document.getElementById("services");
var contacts = document.getElementById("contacts");
var toolBar = document.getElementById("toolBar");
var serviceBar = document.getElementById("serviceBar");
var contactBar = document.getElementById("contactBar");
var toolBarDropdown = document.getElementById("toolDropdown");
var serviceBarDropdown = document.getElementById("serviceDropdown");
var contactBarDropdown = document.getElementById("contactDropdown");

tools.addEventListener('click', ()=> {
toolBar.classList.toggle("dropdownMenuOpened")
})

toolBarDropdown.addEventListener('mouseleave', ()=> {
toolBar.classList.remove("dropdownMenuOpened")
})


services.addEventListener('click', () =>{
serviceBar.classList.toggle("dropdownMenuOpened");
});

serviceBarDropdown.addEventListener('mouseleave', () =>{
serviceBar.classList.remove("dropdownMenuOpened");
});

contacts.addEventListener("click", () =>{
contactBar.classList.toggle("dropdownMenuOpened");
});

contactBarDropdown.addEventListener("mouseleave", ()=>{
contactBar.classList.remove("dropdownMenuOpened");
})