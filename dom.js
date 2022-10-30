var itemList= document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='blue'
// console.log(itemList.parentNode.parentNode.parentNode);
//parent element
// itemList.parentElement.style.backgroundColor="yellow"

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);

// //firstchild ->uselsess
// console.log(itemList.firstChild);

// //first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="hello 1"

// //lastchild ->uselsess
// console.log(itemList.lastChild);

// //last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello last"

// //next Sibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
// //previous elememt sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='yellow'

//create element
//create div
var newdiv= document.createElement('div');
newdiv.className="hello";

//add id
newdiv.id="hello1"
// add attribute
newdiv.setAttribute('title','hello div');
//create text node
var newdivtext = document.createTextNode('hello world')
newdiv.appendChild(newdivtext);

// var container= document.querySelector('header .container')
// var h1 = document.querySelector('header h1');

console.log(newdiv);
// container.insertBefore(newdiv,h1)
//append child before item lister
document.getElementById("main").prepend(newdiv)

//appemd child before item 1

let prelist= document.createElement('li');
prelist.textContent="hello world"; 
prelist.className="list-group-item"
document.getElementById('items').prepend(prelist)