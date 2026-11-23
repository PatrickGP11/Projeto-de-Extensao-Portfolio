/* ==========================================================
   script.js | Projeto 01 - Link na Bio
   Dois recursos, ambos opcionais (a página funciona sem JS):
   1. Alternância de tema claro/escuro
   2. Validação e envio do formulário de contato
   ========================================================== */
(() => {
    'use strict';

    /* 1. TEMA -------------------------------------------------
       O tema é um atributo no <html>: data-tema="claro" ou data-tema="escuro".
       O CSS troca as cores com base nesse atributo (ver style.css).
       O pequeno script no <head> de cada página aplica o tema salvo antes da
       pintura da tela; aqui repetimos a checagem por segurança e tratamos o clique. */
    const raiz = document.documentElement;
    const botaoTema = document.getElementById('botao-tema');

    const lerTemaSalvo = () => {
        // localStorage pode estar bloqueado (modo privado): try/catch evita quebrar o site
        try {
            return localStorage.getItem('tema');
        } catch (e) {
            return null;
        }
    };

    const salvarTema = (tema) => {
        try {
            localStorage.setItem('tema', tema);
        } catch (e) { /* sem persistência, o tema vale só nesta visita */ }
    };

    const atualizarBotaoTema = () => {
        if (!botaoTema) return;
        const claro = raiz.getAttribute('data-tema') === 'claro';
        botaoTema.setAttribute('aria-pressed', String(claro));
        botaoTema.textContent = claro ? 'Tema escuro' : 'Tema claro';
    };

    // Se o <head> não aplicou nenhum tema, aplica agora: salvo > preferência do sistema > escuro
    if (!raiz.hasAttribute('data-tema')) {
        const salvo = lerTemaSalvo();
        const sistemaClaro = window.matchMedia('(prefers-color-scheme: light)').matches;
        raiz.setAttribute('data-tema', salvo === 'claro' || salvo === 'escuro' ? salvo : (sistemaClaro ? 'claro' : 'escuro'));
    }

    if (botaoTema) {
        atualizarBotaoTema();
        botaoTema.addEventListener('click', () => {
            // Lê o estado REAL do <html> (e não uma variável), assim nunca fica dessincronizado
            const novoTema = raiz.getAttribute('data-tema') === 'claro' ? 'escuro' : 'claro';
            raiz.setAttribute('data-tema', novoTema);
            salvarTema(novoTema);
            atualizarBotaoTema();
        });
    }

    /* 2. FORMULÁRIO DE CONTATO --------------------------------- */
    const form = document.getElementById('form-contato');
    if (!form) return; // outras páginas terminam aqui

    const status = document.getElementById('form-status');
    const botaoEnviar = form.querySelector('button[type="submit"]');
    const campos = Array.from(form.querySelectorAll('input, textarea'));

    // Uma mensagem clara para cada tipo de erro de cada campo
    const mensagens = {
        name: { valueMissing: 'Digite seu nome.' },
        email: {
            valueMissing: 'Digite seu e-mail.',
            typeMismatch: 'Digite um e-mail válido, como nome@exemplo.com.'
        },
        message: {
            valueMissing: 'Escreva sua mensagem.',
            tooShort: 'A mensagem precisa ter pelo menos 10 caracteres.'
        }
    };

    // Valida um campo, mostra (ou limpa) o erro e retorna true/false
    const validarCampo = (campo) => {
        const areaErro = document.getElementById(`${campo.id}-erro`);
        let texto = '';

        if (campo.value.trim() === '') {
            // Só espaços também conta como vazio
            texto = mensagens[campo.id].valueMissing;
        } else if (!campo.validity.valid) {
            const regras = mensagens[campo.id];
            const tipo = Object.keys(regras).find((t) => campo.validity[t]);
            texto = tipo ? regras[tipo] : campo.validationMessage;
        }

        areaErro.textContent = texto;
        campo.setAttribute('aria-invalid', String(texto !== ''));
        return texto === '';
    };

    const mostrarStatus = (texto, tipo) => {
        status.textContent = texto;
        status.dataset.tipo = tipo;
    };

    campos.forEach((campo) => {
        // Valida ao sair do campo; depois de um erro, revalida a cada tecla
        campo.addEventListener('blur', () => validarCampo(campo));
        campo.addEventListener('input', () => {
            if (campo.getAttribute('aria-invalid') === 'true') validarCampo(campo);
        });
    });

    form.addEventListener('submit', async (evento) => {
        evento.preventDefault(); // impede o recarregamento da página
        mostrarStatus('', '');

        const resultados = campos.map(validarCampo);
        if (resultados.includes(false)) {
            campos[resultados.indexOf(false)].focus(); // leva o foco ao 1º campo com erro
            return;
        }

        botaoEnviar.disabled = true;
        botaoEnviar.textContent = 'Enviando...';

        try {
            const resposta = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);

            form.reset();
            campos.forEach((c) => c.removeAttribute('aria-invalid'));
            mostrarStatus('Mensagem enviada! Responderei assim que possível.', 'sucesso');
        } catch (erro) {
            mostrarStatus('Não foi possível enviar agora. Tente novamente em instantes.', 'erro');
        } finally {
            botaoEnviar.disabled = false;
            botaoEnviar.textContent = 'Enviar mensagem';
        }
    });
})();
