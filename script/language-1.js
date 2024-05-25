function texto () {
    document.getElementById("text").innerHTML = "Hello World";
}
document.getElementById('port').EventListener('click', () => changeLanguage('pt'));
document.getElementById('es').addEventListener('click', () => changeLanguage('es'));
document.getElementById('en').addEventListener('click', () => changeLanguage('en'));