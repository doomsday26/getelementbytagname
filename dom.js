//query selector and query selector all

// var header = document.querySelector('#main-header');
// header.style.borderBottom='2px solid black'

// var input= document.querySelector('input');
// input.value='hello world';

// var submit =document.querySelector('input[type="submit"]');
// submit.value='SEND'

// var item= document.querySelector(".list-group-item")
// item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='green';

//second child bg color green
// var lastItem = document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.backgroundColor='green' ;
// //third item display none
// var lastItem = document.querySelector('.list-group-item:nth-child(3)');
// lastItem.style.display='none' ;


//queryselector all
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello'
 

var items= document.querySelectorAll('li');
console.log(items);
items[1].style.color= 'green'

var odd= document.querySelectorAll('li:nth-child(odd)');


for (let i = 0; i < odd.length; i++) {
   odd[i].style.backgroundColor='green';
    
}
