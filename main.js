const form  = document.getElementById('form-valores')

function validaFormulario() {
    const anonasc = document.getElementById('anonasc').value;
    const anoatua = document.getElementById('anoatua').value;

    if (anoatua > anonasc) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Ano de nascimento: <b>${anonasc.value}</b> e ano atual: <b>${anoatua.value}</b> enviados  com sucesso.`;
    const mensagemErro = 'O valor de B deve ser maior que o valor de A.';

    if (validaFormulario()) {
        const mensagemSucessoElemento = document.querySelector('.mensagem-sucesso');
        mensagemSucessoElemento.innerHTML = mensagemSucesso;
        mensagemSucessoElemento.style.display = 'block';

        const mensagemErroElemento = document.querySelector('.mensagem-erro');
        mensagemErroElemento.style.display = 'none';
    } else {
        const mensagemErroElemento = document.querySelector('.mensagem-erro');
        mensagemErroElemento.innerHTML = mensagemErro;
        mensagemErroElemento.style.display = 'block';

        const mensagemSucessoElemento = document.querySelector('.mensagem-sucesso');
        mensagemSucessoElemento.style.display = 'none';
    }
});
