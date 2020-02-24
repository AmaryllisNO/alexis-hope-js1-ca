// select HTML elements
const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError"); 

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


// submit event listener
form.addEventListener("submit", event => {
   // stop 
   event.preventDefault();


   console.log(firstNameError);


   if (checkInputLength(firstName.value) === true) {
      console.log("first name is valid");
   } else {
      firstNameError.style.display = "block";;
   };

   if (checkInputLength(lastName.value) === true) {
      console.log("last name is valid");
   } else {
      emailError.style.display = "block";
   };

   if (checkValidEmail(email.value) === true) {
      console.log("email is valid");
   } else {
      emailError.style.display = "block";
   };

   if (checkMessageLength(message.value) === true) {
      console.log("message is valid")
   } else {
      messageError.style.display = "block";
   }
})

function checkInputLength(value) {

   const trimmedValue = value.trim();

   if(trimmedValue.length > 0) {
      return true;
   } else {
      return false;
   }
}

function checkValidEmail(email) {
   const regEx = /\S+@\S+\.\S+/;
   return regEx.test(email);
}

function checkMessageLength(value) {
   const trimmedValue = value.trim();

   if(trimmedValue.length >= 10) {
      return true;
   } else {
      return false;
   }
}