document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário antes da validação

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value.trim();

    if (email && senha) {
        // Se ambos os campos estiverem preenchidos, realiza o redirecionamento
        window.location.href = 'BarraLateral.html';
    } else {
        alert('Preencha o e-mail e a senha para continuar.');
    }
});