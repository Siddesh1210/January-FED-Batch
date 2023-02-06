let button=document.getElementById("btn");
let Order=document.getElementsByClassName("orderBtn");
for(i=0;i<Order.length;i++)
{
    // console.log(Order[i])
    Order[i].addEventListener('click',orderFood)
}


function orderFood()
{
    console.log("Order Food");
}
