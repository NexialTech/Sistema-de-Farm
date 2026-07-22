document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');
    const codigo = document.getElementById('codigoFaccao').value;
    const mensagemCodigo = document.getElementById('mensagemCodigo');

    // Validação de Senha
    if (senha !== confirmarSenha) {
        event.preventDefault(); // Impede o envio do formulário
        mensagemErro.textContent = 'As senhas não coincidem.';
        mensagemErro.classList.add('visible');
    } else {
        mensagemErro.textContent = '';
        mensagemErro.classList.remove('visible');
    }

    // Validação do Código da Facção
    const padraoCodigo = /^(?=.{7}$)(?=(?:.*[A-Za-z]){3})(?=(?:.*\d){4})[A-Za-z0-9]+$/;
    if (!padraoCodigo.test(codigo)) {
        event.preventDefault(); // Impede o envio do formulário
        mensagemCodigo.textContent = 'Verifique o código para o acesso correto.';
        mensagemCodigo.classList.add('visible');
    } else {
        mensagemCodigo.textContent = '';
        mensagemCodigo.classList.remove('visible');
    }
});A