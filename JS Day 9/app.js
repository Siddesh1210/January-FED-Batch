let Order=document.getElementsByClassName("orderBtn");
// console.log(Order);
for(i=0;i<Order.length;i++)
{
    // console.log(Order[i])
    Order[i].addEventListener('click',orderFood);
}


function orderFood(e)
{
    // console.log("Button is clicked!!!");
    // console.log(e.target.dataset.price)
    Fname=e.target.dataset.title;
    price=e.target.dataset.price;
    let foodName=document.getElementById("title");
    let foodPrice=document.getElementById("price");
    foodName.innerHTML=Fname;
    foodPrice.innerHTML=price;
    let success=document.getElementById("success-alert");
    success.classList.remove('d-none')
}
