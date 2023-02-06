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
        // alert("Student already Exist!!!")
        console.log(check);
        let err=document.getElementById("error");
        err.classList.add("alert-error");
        err.classList.remove("d-none");
        setTimeout(()=>
        {
            err.classList.remove('alert-error');
            err.classList.add('d-none');
        },2000)
        document.getElementById('email').value="";
        check=0;
    }
    else
    {
        tempStudent={
            name:tempName,
            email:tempEmail,
        }
        student.push(tempStudent);
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
        // console.log(student);
        // alert("Successfully registered!!!")
        let suc=document.getElementById("success");
        suc.classList.add("alert-success");
        suc.classList.remove("d-none");
        setTimeout(()=>
        {
            suc.classList.remove('alert-success');
            suc.classList.add("d-none");
        },2000)

    }
 }
