var li= document.getElementById('items')
const append =document.createElement("li")
append.innerText="item 5"
append.className="list-group-item";
li.appendChild(append);

// let items= document.getElementsByClassName("list-group-item");
// items[4].style.backgroundColor="aqua"
let tag= document.getElementsByTagName('li');
tag[4].style.backgroundColor="aqua";
