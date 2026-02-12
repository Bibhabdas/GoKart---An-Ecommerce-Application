
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let massage = document.getElementById("msg");

let userInfo = JSON.parse(localStorage.getItem("userData"));

document.getElementById("subBtn").addEventListener("click", function userLogin(e) {
    // setTimeout(() => {
    //     e.preventDefault();
    // }, 1000); 
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (userInfo && emailValue === userInfo.email && passwordValue === userInfo.password) {
        alert("Login Successfull");
        window.location.href = "../Home/Home.html"; 
    } else {
        massage.textContent = "Wrong Credentials";
    }
});