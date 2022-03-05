var formSelector = document.querySelector('form');
formSelector.addEventListener('submit',formValidation);
var inputSelector = document.getElementById('ageInput');

function formValidation(event){

    event.preventDefault();
    var isValidated = true;

    if(inputSelector.value ===""){
        console.log('You need to fill in your age');
        isValidated = false;
    }
    if(inputSelector.value % 1 !== 0){
        console.log("No Float");
        isValidated = false;
    }
    if(isValidated === true){
        formSelector.submit();
    }
}

// var formSelector = document.getElementById('ageForm');
// var inputSelector = document.getElementById('ageInput');
// formSelector.addEventListener('submit', validateForm);
// var errorTextSelector = document.getElementById('errorText');

// function hasError(errorText) {
//     errorTextSelector.style.display = "block";
//     inputSelector.style.borderColor = "red";
//     errorTextSelector.innerText = errorText;
// }

// function validateForm(event) {
//   var inputValue = inputSelector.value;
//   event.preventDefault();
  
//   if (inputValue === "") {
//     hasError("Age is required.");
//   } else {
//     if (isNaN(inputValue)) {
//       hasError("Age must be a number (duh).");
//     } else {
//       if (inputValue % 1 !== 0) {
//         hasError("Age must be a whole number.");
//       } else {
//         if (inputValue < 21 || inputValue > 104) {
//           hasError("Age must be higher than 21 and less than 104.");
//         } else {
//           formSelector.submit();
//         }
//       }
//     }
//   }
// }