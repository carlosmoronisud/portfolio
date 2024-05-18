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
// Enviar o email pelo formspree

var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    var formData = new FormData(form); // Obtém os dados do formulário

    var xhr = new XMLHttpRequest(); // Cria uma nova requisição AJAX

    xhr.open("POST", form.action, true); // Configura a requisição POST para o endpoint do Formspree

    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200 || xhr.status === 0) {
                // Sucesso - redireciona para uma página de confirmação ou exibe uma mensagem de sucesso
                console.log("Formulário enviado com sucesso!");
                form.reset(); // Limpa o formulário após o envio bem-sucedido
            } else {
                // Falha - exibe uma mensagem de erro ou lida com o erro de outra forma
                console.error("O envio do formulário falhou!");
            }
        }
    };

    xhr.send(formData); // Envia os dados do formulário
});