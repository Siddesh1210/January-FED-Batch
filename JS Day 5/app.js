// Array of Object
// let arr=[1,2,3,4];

// let student=
// {
//     name:"Rahul",
//     age:20
// }

// let users=[
//     {
//         name:"Siddesh",
//         age:21
//     },
//     {
//         name:"Haamid",
//         age:19
//     }
// ]

//fetch,add

// console.log(users[0].age)

// Add new object in aob
// let tempUser={
//     name:"Amiprat",
//     age:19
// }

// users.unshift(tempUser);

// console.log(users);

// Delete an object from aob

// users.shift();
// console.log(users)

// Lucky draw winner game
// let participants=[
//     {
//         name:"Haamid",
//         age:19,
//     },
//     {
//         name:"Amiprat",
//         age:19,
//     },
//     {
//         name:"Sakshi",
//         age:19,
//     },
//     {
//         name:"Prabhat",
//         age:19,
//     },
//     {
//         name:"Ritik",
//         age:19,
//     }
// ]

// let random=Math.floor(Math.random()*5);
// console.log(participants[random].name)

// Return statement in function

// function addition(num1,num2)
// {
//     return (num1+num2);
//     console.log("Hii Siddesh");
// }

// let result=addition(10,20);
// console.log(result)
// let sum=10+result;
// console.log(sum);

// Loop --> While , do-while , For
// let arr=[1,2,3,4,5];
// console.log(arr.length);
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// ForEach ForOF
// users.forEach((x)=>
// {
//     console.log(x)
// }
// )

// let users=["Siddesh","Ritik","Haamid"]
// for(let temp of users)
// {
//     console.log(temp);
// }

// Rest Function

// function sum(...args)
// {
//     for(let x of args)
//     {
//         console.log(x)
//     }
// }

// sum(1,2,3,4,5)

//spread operator
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// // console.log(arr2)
// let newArray=[...arr1,...arr2]
// console.log(newArray);

// sum=(a,b)=>
// {
//    console.log(a+b) 
// }

// sum(2,4)

let users=["Siddesh","Ritik","Haamid"];

users.forEach((x)=>
{
    console.log(x);
}
)

