 let student=[];
 let check;
 function addStudent()
 {
    let tempName=document.getElementById("name").value;
    let tempEmail=document.getElementById("email").value;
    // console.log(tempName);
    // console.log(tempEmail);

    student.filter((x)=>
    {
        if(x.email==tempEmail)
        {
            check=1;
        }
    })

    if(check==1)
    {
        alert("Student already Exist!!!")
    }
    else
    {
        tempStudent={
            name:tempName,
            email:tempEmail,
        }
        student.push(tempStudent);
        alert("Successfully registered!!!")
        let parent=document.getElementById('container');
        let divTag=document.createElement('div');
        parent.appendChild(divTag);
        let name=document.createElement('h3');
        let email=document.createElement('h3');
        name.innerHTML=tempName;
        email.innerHTML=tempEmail;
        divTag.appendChild(name);
        divTag.appendChild(email);
        divTag.classList.add('students');
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        console.log(student);
    }



 }