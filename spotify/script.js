document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simulação de validação
    if (email === "usuario@exemplo.com" && password === "40028922") {
        message.textContent = "Login bem-sucedido!";
        message.style.color = "green";
    } else {
        message.textContent = "Email ou senha incorretos.";
        message.style.color = "red";
    }
});