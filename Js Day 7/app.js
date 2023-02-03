//Element Selector
// 1.By ID
// 2.By class
// 3.By Tag

// let headTag=document.getElementById('head1');
// console.log(headTag);
// console.log(headTag.innerHTML);
// headTag.style.color="red";
// headTag.style.backgroundColor="black";


// By Class

// let ele=document.getElementsByClassName('list');
// console.log(ele);
// for(let i=0;i<ele.length;i++)
// {
//     ele[i].innerHTML="List value is Changed"
// }

// By Tag

// let arr=document.getElementsByTagName('p');
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i].style.color="red";
// }

// let parent=document.getElementById('container');
// let divTag=document.createElement('h1'); //created div tag
// divTag.innerHTML="H1 tag text"
// parent.appendChild(divTag);

let parent=document.getElementById('container');
let divTag=document.createElement('div');  //div created
parent.appendChild(divTag);
let userName=document.createElement('h3'); //h3 first name element created
let userEmail=document.createElement('h3'); //h3 second email element created
userName.innerHTML="Siddesh Jaiswal";
userEmail.innerHTML="siddeshjaiswal12@gmail.com";
divTag.appendChild(userName);
divTag.appendChild(userEmail);

divTag.classList.add('card');
