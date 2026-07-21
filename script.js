document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formLogin');
    const email = document.getElementById('email');
    const senha = document.getElementById('password');
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');

    // ===== FUNÇÃO PARA VALIDAR EMAIL (contém @) =====
    function validarEmail(valor) {
        return valor.includes('@');
    }

    // ===== FUNÇÃO PARA VALIDAR SENHA (>= 6 caracteres) =====
    function validarSenha(valor) {
        return valor.length >= 6;
    }

    // ===== VALIDAÇÃO EM TEMPO REAL (enquanto digita) =====
    email.addEventListener('input', function() {
        const valor = this.value.trim();
        if (valor === '') {
            // Se estiver vazio, exibe mensagem de vazio (ou pode esconder)
            erroEmail.textContent = '⚠️ O e-mail é obrigatório.';
            erroEmail.classList.add('visivel');
            this.classList.add('erro');
            this.classList.remove('sucesso');
        } else if (!validarEmail(valor)) {
            erroEmail.textContent = '⚠️ O e-mail deve conter "@".';
            erroEmail.classList.add('visivel');
            this.classList.add('erro');
            this.classList.remove('sucesso');
        } else {
            erroEmail.classList.remove('visivel');
            this.classList.remove('erro');
            this.classList.add('sucesso');
        }
    });

    senha.addEventListener('input', function() {
        const valor = this.value.trim();
        if (valor === '') {
            erroSenha.textContent = '⚠️ A senha é obrigatória.';
            erroSenha.classList.add('visivel');
            this.classList.add('erro');
            this.classList.remove('sucesso');
        } else if (!validarSenha(valor)) {
            erroSenha.textContent = '⚠️ A senha deve ter pelo menos 6 caracteres.';
            erroSenha.classList.add('visivel');
            this.classList.add('erro');
            this.classList.remove('sucesso');
        } else {
            erroSenha.classList.remove('visivel');
            this.classList.remove('erro');
            this.classList.add('sucesso');
        }
    });

    // ===== VALIDAÇÃO NO SUBMIT =====
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Limpa erros antigos
        erroEmail.classList.remove('visivel');
        erroSenha.classList.remove('visivel');
        email.classList.remove('erro');
        senha.classList.remove('erro');

        const valEmail = email.value.trim();
        const valSenha = senha.value.trim();

        let valido = true;

        // Valida email
        if (valEmail === '') {
            erroEmail.textContent = '⚠️ O e-mail é obrigatório.';
            erroEmail.classList.add('visivel');
            email.classList.add('erro');
            valido = false;
        } else if (!validarEmail(valEmail)) {
            erroEmail.textContent = '⚠️ O e-mail deve conter "@".';
            erroEmail.classList.add('visivel');
            email.classList.add('erro');
            valido = false;
        }

        // Valida senha
        if (valSenha === '') {
            erroSenha.textContent = '⚠️ A senha é obrigatória.';
            erroSenha.classList.add('visivel');
            senha.classList.add('erro');
            valido = false;
        } else if (!validarSenha(valSenha)) {
            erroSenha.textContent = '⚠️ A senha deve ter pelo menos 6 caracteres.';
            erroSenha.classList.add('visivel');
            senha.classList.add('erro');
            valido = false;
        }

        if (!valido) {
            return; // interrompe se houver erro
        }

        // Tudo válido! Exibe no console (sem alerta, sem redirecionamento)
        console.clear(); // limpa o console antes de novos logs
        console.log('✅ Dados preenchidos corretamente:');
        console.log('📧 E-mail:', valEmail);
        console.log('🔒 Senha:', valSenha);
    });
});