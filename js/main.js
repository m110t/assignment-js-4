var userName = document.getElementById("username")
var email = document.getElementById("emailAddres")
var password = document.getElementById("pass-word")
var btn = document.getElementById("login")
// signUpList =[];

userName.addEventListener("change", function(){
  var reagexName = /^[A-Z][a-z]+$/
      var userNameValue = userName.value;
      
  if (reagexName.test(userNameValue)) {
    userName.classList.add("is-valid")
    
    
  }else {
    alert("wrong Name (Your Name Sholud Start With Capital Char)")
    
  }
   
})
email.addEventListener("change", function(){
  var reagexEmail = /^[a-zA-Z]+@gmail\.com$/
      var emailValue = email.value;
      
  if (reagexEmail.test(emailValue)) {
    email.classList.add("is-valid")
    
 
  }else {
    alert("wrong email")
    
  }
   
})
password.addEventListener("change", function(){
   var reagexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
var passValue = password.value;
      
  if (reagexpass.test(passValue)) {
    password.classList.add("is-valid")
    
   
  }else  {
    alert("wrong password (Your Password should Include at least 3 Number and one or more sympols from that ! @ # $ % ^ & *)")
  }
   
})





// function signup(e) {


//   var name = document.getElementById("username").value
//   var emailAdd = document.getElementById("emailAddres").value
//   var pass = document.getElementById("pass-word").value
//   var signUpList = [];
//   signUpList=JSON.parse(localStorage.getItem("sign"))?JSON.parse(localStorage.getItem("sign")):[]
//   if(signUpList.some((v)=>{
//     return v.account == emailAdd
//   })){
//     alert("Dublicated Data")
//   }
  
//   else{

  
//  signUpList.push({
//   "useridenty" : name,
//   "account":     emailAdd,
//   "security":    pass
// })
// }

// localStorage.setItem("sign",JSON.stringify(signUpList))



// }


// function signup() {
//   // e.preventDefault(); // Prevents the form from submitting (if used within a form)

//   var name = document.getElementById("username").value;
//   var emailAdd = document.getElementById("emailAddres").value;
//   var pass = document.getElementById("pass-word").value;
//   signUpList= [];
//   // Retrieve the sign-up list from localStorage
//   var signUpList = JSON.parse(localStorage.getItem("sign")) || [];

  // Check if there's already an entry with the same email

// for(var i= 0; i <signUpList.length; i++) {

// }

function signup() {
  var name = document.getElementById("username").value;
  var emailAdd = document.getElementById("emailAddres").value;
  var pass = document.getElementById("pass-word").value;

  var signUpList = JSON.parse(localStorage.getItem("sign")) || [];

  var isDuplicated = false;

  for (var i = 0; i < signUpList.length; i++) {
    if (signUpList[i].account === emailAdd) {
     
      isDuplicated = true;
      break;
    }
  }

  if (isDuplicated) {
  
    alert("Email is already registered. Please use a different email.");
  } else {
    
    signUpList.push({
      useridentity: name,
      account: emailAdd,
      security: pass
    });

    
    window.open("login.html", "_target"); // "_self" opens the page in the same tab/window
    localStorage.setItem("sign", JSON.stringify(signUpList));

    
  }
}


//   if(signUpList.some((v) => {
//     return v.account === emailAdd;
    
//   })) {
//     alert("Duplicated Data");
//   } else {
//     // If email is not duplicated, add a new entry
//     signUpList.push({
//       useridenty : name,
//       account: emailAdd,
//       security: pass
//     });
    
//     // Update localStorage
//     window.open("login.html")
//     localStorage.setItem("sign", JSON.stringify(signUpList));
   
//   }
// }





function signing(){
window.open("login.html")
}





































































// var emailAddres =document.getElementById("emailAddres")
//  var passNumber =document.getElementById("pass-word")
// var loginBtn = document.getElementById("login")



//   emailAddres.addEventListener("input",function(){

//     var reagexEmail = /^[a-zA-Z]+@gmail\.com$/
//     var emailAddresVlaue = emailAddres.value;
    
// if (reagexEmail.test(emailAddresVlaue)) {
//   emailAddres.classList.add("is-valid")

 
//   loginBtn.addEventListener("click", function(){
    
//   })
//   emailAddres.classList.remove("is-invalid"); // Remove 'is-invalid' class if previously applied

// }else {
//   emailAddres.classList.remove("is-valid"); // Remove 'is-valid' class if previously applied
//   emailAddres.classList.add("is-invalid")

// }
//   })



// passNumber.addEventListener("input",function(){
//   var reagexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
//   var passNumberValue = passNumber.value;

//   if (reagexpass.test(passNumberValue)) {
//       passNumber.classList.add("is-valid");
   
//       passNumber.classList.remove("is-invalid");
//       passNumber.setCustomValidity(""); // Reset any previous custom error message
//   } else {
//       passNumber.classList.remove("is-valid");
//       passNumber.classList.add("is-invalid");
//       passNumber.setCustomValidity("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@.#$!%*?&) and be between 8 and 15 characters long.");
//   }
// });



// // function w2school() {
// //   window.open("https://www.facebook.com")
// // }

// // loginBtn.addEventListener("click", function() {
// //   if(reagexEmail.test(emailAddresVlaue) && reagexpass.test(passNumberValue) )
// //   w2school()
// // })