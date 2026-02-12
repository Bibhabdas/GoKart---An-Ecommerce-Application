document.getElementById("formContainer").addEventListener("submit",function data(e){
    e.preventDefault();
    let name=document.getElementById("full-name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let mobile=document.getElementById("mobile").value;
    let errorMail=document.getElementById("errorMail");
    let errorPassword=document.getElementById("errorPWD");
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(mobile);

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^s@]+$/;
    let passPattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}$/;
    if(!emailPattern.test(email)){
        errorMail.textContent="Invalid Email...";
        errorMail.style.color="Red";
        return;
    }else{
        errorMail.textContent="";
    }
    if(!passPattern.test(password)){
        errorPassword.textContent="Password doesn't match";
        errorPassword.style.color="Red";
        return;
    }else{
        errorPassword.textContent="";
    }

    let userData={
        name:name,
        email:email,
        password:password,
        mobile:mobile
    };
    localStorage.setItem("userData",JSON.stringify(userData));
    alert("Registration Successfull");
    window.location.href="./Login.html";
    
})
