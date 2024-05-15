var formIsValid = true; // Variável de controle

document.getElementById('enviarBtn').addEventListener('click', function(event) {
    if (!formIsValid) {
        event.preventDefault(); // Impede o envio do formulário se não for válido
        return; // Retorna imediatamente se o formulário já foi invalidado anteriormente
    }

    var errorMessage = '';
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var subjectInput = document.getElementById('subject');
    var messageInput = document.getElementById('message');

    // Validação do campo Nome
    if (nameInput.value.trim() === '') {
        errorMessage += 'Por favor, preencha seu nome.<br>';
        formIsValid = false; // Define o formulário como inválido
    }

    // Validação do campo E-mail
    var emailValue = emailInput.value.trim();
    if (emailValue === '') {
        errorMessage += 'Por favor, preencha seu e-mail.<br>';
        formIsValid = false; // Define o formulário como inválido
    } else if (!isValidEmail(emailValue)) {
        errorMessage += 'Por favor, insira um e-mail válido (exemplo: texto@texto.com).<br>';
        formIsValid = false; // Define o formulário como inválido
    }

    // Validação do campo Assunto
    var subjectValue = subjectInput.value.trim();
    if (subjectValue === '') {
        errorMessage += 'Por favor, preencha o assunto.<br>';
        formIsValid = false; // Define o formulário como inválido
    } else if (subjectValue.length > 50) {
        errorMessage += 'O assunto deve conter no máximo 50 caracteres.<br>';
        formIsValid = false; // Define o formulário como inválido
    }

    // Validação do campo Mensagem
    var messageValue = messageInput.value.trim();
    if (messageValue === '') {
        errorMessage += 'Por favor, preencha a mensagem.<br>';
        formIsValid = false; // Define o formulário como inválido
    } else if (messageValue.length > 300) {
        errorMessage += 'A mensagem deve conter no máximo 300 caracteres.<br>';
        formIsValid = false; // Define o formulário como inválido
    }

    // Restante da validação do formulário...

    // Se o formulário não for válido, exibe a mensagem de erro
    if (!formIsValid) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById('errorMessage').innerHTML = errorMessage;
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        // Limpa a mensagem de erro se o formulário for válido
        document.getElementById('errorMessage').innerHTML = '';
        document.getElementById('errorMessage').style.display = 'none';
    }
});

// Função para validar o formato de e-mail
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
