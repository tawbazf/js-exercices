/**
 * document object dom
 * use it to manipulate content style and structure
 * one of the most unique and useful tools of javascript
 * dom tree
 * tree of nodes
 */
const title=document.querySelector('#main-heading');
title.style.color='red';

// CSS ITS font-size
const listItems=document.querySelectorAll('list-items');
for (i=0;i<listItems.length;i++){
listItems[i].style.fontSize= '2rem';
}
// creating elements
const ul=document.querySelector('ul');
const li=document.createElement('li');
//adding elements
ul.append(li);

//modifing  the text
li.innerText='x-men';

const firstListItem=document.querySelector('list-items');
//neo the matrix
console.log(firstListItem.innerText);
// noe
// the matrix
console.log(firstListItem.textContent);
//<span>noe</span>the matrix
console.log(firstListItem.innerHTML);
//modifiing attributes  nd classes
li.setAttribute('id','main-heading');
li.removeAttribute('id');
const title=document.querySelector('main-heading');
console.log(title.getAttribute('id'));


li.classList.add('list-items');
//
li.classList.remove('list-items');
console.log(li.classList.contains('list-items')); //false
//remove elements
li.remove();
