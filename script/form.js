var formValid = true;
var vazio = '';
var inputs = document.querySelectorAll('#myForm input');


document.getElementById('enviarBtn').addEventListener('click', function(event){
    if (!formValid) {
        event.preventDefault();
        document.getElementById('errorMessage').innerHTML = vazio;
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').innerHTML = '';
        document.getElementById('errorMessage').style.display = 'none';
    }
});

var nameInp = document.getElementById('name');
var emailInp = document.getElementById('email');
var assuntoInp = document.getElementById('subject');
var messagemInp = document.getElementById('message');

if (nameInp.value.trim() === '') {
    vazio += 'Por favor, preencha seu nome.<br>';
    formValid = false; 
} else if (nameInp.value.length > 50) {
    vazio += 'O nome não pode ter mais de 50 caracteres.<br>';
    formValid = false; 
}

if (assuntoInp.value.trim() === '') {
    vazio += 'Por favor, preencha seu assunto.<br>';
    formValid = false; 
} else if (assuntoInp.value.length > 50) {
    vazio += 'O assunto não pode ter mais de 50 caracteres.<br>';
    formValid = false; 
}

var emailValue = emailInp.value.trim();
if (emailValue === '') {
    vazio += 'Por favor, preencha seu e-mail.<br>';
    formValid = false; 
} else if (!isValidEmail(emailValue)) {
    vazio += 'Por favor, insira um e-mail válido (exemplo: texto@texto.com).<br>';
    formValid = false; 
}

var messageValue = messagemInp.value.trim();
if (messageValue === '') {
    vazio += 'Por favor, preencha a mensagem.<br>';
    formValid = false; 
} else if (messageValue.length > 300) {
    vazio += 'A mensagem deve conter no máximo 300 caracteres.<br>';
    formValid = false; 
}
