let innernumberdiv = document.querySelector(".numberdiv")
let ContactNumber = document.querySelector(".no")
ContactNumber.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});

let emailadd = document.querySelector(".emailadd")
let logbutton = document.querySelector("#loginBtn")
let logdiv = document.createElement("div")
let buttonOTP =  document.createElement("div")
let errorhandle = document.querySelector(".error")
let errorText = errorhandle.querySelector("p")
let email = document.querySelector(".email")





logdiv.style.width = "70vw"
logdiv.style.height = "75vh"
logdiv.style.position = "absolute";
logdiv.style.zIndex = "1000"
// logdiv.style.display = "flex"
// logdiv.style.flexDirection = "column"
logdiv.style.justifyContent = "center"
logdiv.style.textAlign = "center"
logdiv.style.top = "55%";
logdiv.style.left = "50%";
logdiv.style.transform = "translate(-50%, -50%)";
logdiv.style.backgroundColor = "#16181f"
logdiv.style.borderRadius = "16px"
logdiv.innerHTML = `
    <h1 style="
        color: #E1E6F0;
        font-family: sans-serif;
        margin: 20px;
        font-size: 22px;
    ">
        Login or Signup to continue
    </h1>
    <P style = "
            color : #8F98B2;
            font-family: sans-serif;
            margin: -10px;
            font-size: 16px;
    ">
        Enter phone number to Login    
    </P>
`;



buttonOTP.innerHTML = "Get Login"
buttonOTP.style.cssText = `
    width: 250px;
    height: 46px;
    justify-self: center;
    background: linear-gradient(90deg, rgb(2, 74, 145) 60%,rgb(216, 3, 92) 100%);
    font-family: sans-serif;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    text-align: center;
    margin-top: 4vh;
    line-height: 46px;
    cursor: pointer;



`;

logbutton.addEventListener("click",function(e){
    e.preventDefault(); 
    document.body.style.position = "relative";
    document.body.style.zIndex = "1"
    document.body.appendChild(logdiv)
    innernumberdiv.style.display = "flex";
    emailadd.style.display = "flex";
    logdiv.appendChild(innernumberdiv);
    logdiv.appendChild(emailadd)
    logdiv.appendChild(buttonOTP);

});



buttonOTP.addEventListener("click",
    function(){
        let haserror = false;
        let num = ContactNumber.value.trim()
        let emailvalue = email.value.trim()
        if(!num){
            ContactNumber.style.border = "1px red solid"
            haserror = true   
        }
        else{
            if(num.length != 10){
                haserror = true
                ContactNumber.style.border = "1px red solid"
            }
            else{
            ContactNumber.style.border = "1px green solid"
        

            }

        }
        if(!emailvalue){
            email.style.border = "1px red solid"
            haserror = true
        }
        else{
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(emailvalue)){
                email.style.border = "1px red solid";
                haserror = true;
            }
            else{
            email.style.border = "1px green solid"

            }
        }
        if(haserror){
            errorhandle.style.display = "flex";
            errorText.style.display = "block" 
            logdiv.appendChild(errorhandle)
        }
        else{
        errorhandle.style.display = "none";
        window.location.href = "log.html";
        }
        
    })
      

        

