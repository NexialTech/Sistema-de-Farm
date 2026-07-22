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
        // E-mail
        if (emailInput.value.trim() === '') {
            erroEmail.classList.remove('visible'); 
        } else if (!validarEmail(emailInput.value)) {
            erroEmail.classList.add('visible');
        } else {
            erroEmail.classList.remove('visible');
        }

        // Código
        if (codigoInput.value.trim() === '') {
            erroCodigo.classList.remove('visible');
        } else if (!validarCodigo(codigoInput.value)) {
            erroCodigo.classList.add('visible');
        } else {
            erroCodigo.classList.remove('visible');
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
                erroEmail.classList.add('visible');
                emailInput.focus();
            } else {
                erroEmail.classList.remove('visible');
            }
            
            if (!codigoValido) {
                erroCodigo.classList.add('visible');
                if (emailValido) codigoInput.focus();
            } else {
                erroCodigo.classList.remove('visible');
            }
        } else {
            e.preventDefault(); 
            alert('Dados enviados com sucesso! (Simulação)');
        }
    });
})();