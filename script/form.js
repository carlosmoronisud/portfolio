document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário padrão

        var formData = new FormData(form); // Obtém os dados do formulário

        var xhr = new XMLHttpRequest(); // Cria uma nova requisição AJAX

        xhr.open("POST", form.action, true); // Configura a requisição POST para o endpoint do Formspree

        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Sucesso - mostra uma mensagem de sucesso
                    // console.log("Formulário enviado com sucesso!");
                    alert("Formulário enviado com sucesso!");
                    form.reset(); // Limpa o formulário após o envio bem-sucedido
                } else {
                    // Falha -mostra uma mensagem de erro ou lida com o erro de outra forma
                    // console.error("O envio do formulário falhou!");
                    alert("O envio do formulário falhou!");
                }
            }
        };

        xhr.send(formData); // Envia os dados do formulário
    });
});

