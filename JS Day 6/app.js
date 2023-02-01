//Map , Filter , Reduce
//Map is basically for mapping each value from an array as well as we can create new array after performing certain operation.

// let arr=[1,2,3,4,5]

// let newArray=arr.map((x)=>
// {
//     return (x*2);
// }
// )

// console.log(newArray);

//1 4 9 16 25

// Filter --> Its will filter our array based on some condition and give us new array

// let number=[1,2,3,4,5]

// let newArray=number.filter((x)=>
// {
//     return (x < 4)
// }
// )

// console.log(newArray);

// Reduce --> It is use for reducing your array to one single value


let number=[1,2,3,4,5];
//first argument point to previous value 
//Second argument point to current value
let sum=number.reduce((a,b)=>
{
    return (a+b);
}
)

//1+2=3
// [3]
//3+3=6
//[6]
//6+4=10
//[10]
//10+5=15
//15
console.log(sum);

