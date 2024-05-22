var nameInput = document.getElementById("name");
var errorMsg = document.getElementById("error-msg");

nameInput.addEventListener("invalid", function(event) {
    event.preventDefault();
    nameInput.classList.add("invalid-input");
    errorMsg.style.display = "inline";
});

nameInput.addEventListener("input", function() {
    nameInput.classList.remove("invalid-input");
    errorMsg.style.display = "none";
});
nameInput.addEventListener("input", function() {
    if (nameInput.value.length > 50) {
        nameInput.setCustomValidity("Por favor, limite seu nome a 50 caracteres");
    } else {
        nameInput.setCustomValidity("");
    }
    nameInput.classList.remove("invalid-input");
    errorMsg.style.display = "none";
});
var emailInput = document.getElementById("email");
var emailErrorMsg = document.getElementById("email-error-msg");

emailInput.addEventListener("invalid", function(event) {
    event.preventDefault();
    emailInput.classList.add("invalid-input");
    emailErrorMsg.style.display = "inline";
});

emailInput.addEventListener("input", function() {
    emailInput.classList.remove("invalid-input");
    emailErrorMsg.style.display = "none";
});

var subjectInput = document.getElementById("subject");
var subjectErrorMsg = document.getElementById("subject-error-msg");

subjectInput.addEventListener("invalid", function(event) {
    event.preventDefault();
    subjectInput.classList.add("invalid-input");
    subjectErrorMsg.style.display = "inline";
});

subjectInput.addEventListener("input", function() {
    subjectInput.classList.remove("invalid-input");
    subjectErrorMsg.style.display = "none";
});

var messageInput = document.getElementById("message");
var messageErrorMsg = document.getElementById("message-error-msg");

messageInput.addEventListener("invalid", function(event) {
    event.preventDefault();
    messageInput.classList.add("invalid-input");
    messageErrorMsg.style.display = "inline";
});

messageInput.addEventListener("input", function() {
    messageInput.classList.remove("invalid-input");
    messageErrorMsg.style.display = "none";
});
