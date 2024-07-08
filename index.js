let container = document.querySelector(".container");
  pwShowHide = document.querySelectorAll(".showHidePw");
  pwFields = document.querySelectorAll(".password");

 signUp = document.querySelector(".signup-link"); //login form ka
 login = document.querySelector(".login-link") ;//sinup form ka

//Js code to Show/Hide Password and change icon
 
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener('click',()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type === "password"){
                pwField.type = 'text';

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash","fa-eye")
                })
            }else{
                pwField.type = 'password';

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye","fa-eye-slash")
                })

            }
        })
    })

})
 //js code to appear signup and login form
 signUp.addEventListener("click", ( )=>{
    container.classList.add("active")

 })
 login.addEventListener("click", ( )=>{
    container.classList.remove("active")

 })





