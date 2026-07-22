(function() {
    const form = document.getElementById('form-recuperar');
    const emailInput = document.getElementById('email-recuperacao');
    const codigoInput = document.getElementById('codigo-org');
    const erroEmail = document.getElementById('erro-email');
    const erroCodigo = document.getElementById('erro-codigo');

    function validarEmail(valor) {
        return valor.includes('@');
    }

    function validarCodigo(valor) {
        const regex = /^(?=(?:\D*\d){4})(?=(?:[^A-Za-z]*[A-Za-z]){3})[A-Za-z0-9]{7}$/;
        return regex.test(valor);
    }

    function atualizarMensagens() {
        if (emailInput.value.trim() === '') {
            erroEmail.style.display = 'none'; 
        } else if (!validarEmail(emailInput.value)) {
            erroEmail.style.display = 'block';
        } else {
            erroEmail.style.display = 'none';
        }

        if (codigoInput.value.trim() === '') {
            erroCodigo.style.display = 'none';
        } else if (!validarCodigo(codigoInput.value)) {
            erroCodigo.style.display = 'block';
        } else {
            erroCodigo.style.display = 'none';
        }
    }

    emailInput.addEventListener('input', atualizarMensagens);
    emailInput.addEventListener('blur', atualizarMensagens);
    codigoInput.addEventListener('input', atualizarMensagens);
    codigoInput.addEventListener('blur', atualizarMensagens);

    form.addEventListener('submit', function(e) {
        const emailValido = validarEmail(emailInput.value) && emailInput.value.trim() !== '';
        const codigoValido = validarCodigo(codigoInput.value) && codigoInput.value.trim() !== '';

        if (!emailValido || !codigoValido) {
            e.preventDefault(); 
            if (!emailValido) {
                erroEmail.style.display = 'block';
                emailInput.focus();
            } else {
                erroEmail.style.display = 'none';
            }
            if (!codigoValido) {
                erroCodigo.style.display = 'block';
                if (emailValido) codigoInput.focus();
            } else {
                erroCodigo.style.display = 'none';
            }
        } else {
            e.preventDefault(); 
            alert('Dados enviados com sucesso! (Simulação)');
        }
    });
})();