function clickEvent()
{
    alert("Button was clicked!!!")
}


function box()
{
    alert("user have clicked on box!!!")
}

function outsideBox()
{
    alert("user have come out of our box")
}

function imgover()
{
    let target=document.getElementById("image");
    target.style.filter="blur(3px)";
}

function imgout()
{
    let target=document.getElementById("image");
    target.style.filter="brightness(100%)";
}


function down()
{
    alert("Key was pressed!!!")
}

function up()
{
    alert('Key was released!!!')
}


let buttonDemo=document.getElementById("btn");
buttonDemo.addEventListener('click',()=>
{
    alert("Button was clicked!!!");
}
)

let targetBox=document.getElementById("box");
targetBox.addEventListener('mouseover',function()
{
    alert('Mouse was over the box')
}
)