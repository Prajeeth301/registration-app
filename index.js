window.addEventListener("DOMContentLoaded", (event) => {
    let phoneInput = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");
    let emailId = document.getElementById("email-id");
    let emailErrormsg = document.getElementById("email-error-msg");
    let emailIcon = document.getElementById("email-icon");
    let nameInput = document.getElementById("name-input");

    let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,5}$/;
    phoneInput.setAttribute("onkeypress", "return isNumberKey(event,'mobileNumber');");


    function validatePhone() {
        if (phoneInput.length < 10) {
            phoneError.textContent = "please enter a valid number.";
            return false;
        } else {
            phoneError.textContent = "";
            return true;
        }
    }

    function copy(text) {
        navigator.clipboard.writeText(text)
    }

    function checker() {
        emailIcon.style.display = "inline-block";

        if (emailId.value.length <= 30 && emailId.value.match(mailRegex)) {
            emailIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            emailIcon.style.color = '#2ecc71';
            emailErrormsg.style.display = 'none';
            button.disabled = false;
        } else if (emailId.value === "") {
            emailIcon.style.display = 'none';
            emailErrormsg.style.display = 'none';
            emailId.style.border = '2px solid #d1d3d4';
            button.disabled = true;
        } else {
            emailIcon.innerHTML = '<i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
            emailIcon.style.color = '#ff2851';
            emailErrormsg.style.display = 'block';
            emailId.style.border = '2px solid #ff2851';
            button.disabled = true;
        }
    }

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        if (!validatePhone()) {
            event.preventDefault();
        }
    });


});


// function ValidateEmail(input) {
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (input.value.match(validRegex)) {
//         alert("Valid email address!");
//         return true;
//     } else {
//         alert("Invalid email address!");
//         return false;
//     }

// }

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}