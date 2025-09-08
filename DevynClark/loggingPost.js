var blogTitle = document.getElementsByClassName("blogTitle");

console.log(blogTitle)
const titleArray = Array.from(blogTitle);




titleArray.forEach(title => {
title.addEventListener('click', (event) => {
localStorage.clear();
const chosenPost = event.target.id;
localStorage.setItem("clickedArticle", chosenPost);
console.log(event.target)
console.log(chosenPost);
})
})




 function filterResults() {
let input = document.getElementById('blogSearch'); 
let filter = input.value.toUpperCase();
let ul = document.getElementById('resultsList');
let li = ul.querySelectorAll('div .blogPost' )  

        for (let i = 0; i < li.length; i++) {
            let itemText = li[i].textContent || li[i].innerText;
            if (itemText.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }


