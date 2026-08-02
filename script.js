const emailInput = document.querySelector(".contatoEmail");
const mensagemInput = document.querySelector(".contatoContent");
const contador = document.querySelector(".contadorChars");
const formMensagem = document.querySelector(".formMensagem");
const botao = document.querySelector(".butEnviar");

const LIMITE_CARACTERES = 1000;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

mensagemInput.addEventListener("input", function () {
    if (mensagemInput.value.length > LIMITE_CARACTERES) {
        mensagemInput.value = mensagemInput.value.slice(0, LIMITE_CARACTERES);
    }

    const tamanho = mensagemInput.value.length;
    contador.textContent = `${tamanho}/${LIMITE_CARACTERES}`;
    contador.classList.toggle("limite", tamanho >= LIMITE_CARACTERES);
});

function mostrarErro(texto) {
    formMensagem.textContent = texto;
    formMensagem.classList.remove("sucesso");
    formMensagem.classList.add("erro");
}

function mostrarSucesso(texto) {
    formMensagem.textContent = texto;
    formMensagem.classList.remove("erro");
    formMensagem.classList.add("sucesso");
}

botao.addEventListener("click", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (email === "") {
        mostrarErro("Por favor, preencha seu email.");
        return;
    }

    if (!regexEmail.test(email)) {
        mostrarErro("Digite um email válido.");
        return;
    }

    if (mensagem === "") {
        mostrarErro("Por favor, escreva uma mensagem.");
        return;
    }

    mostrarSucesso("Mensagem enviada com sucesso! Em breve entrarei em contato.");
    emailInput.value = "";
    mensagemInput.value = "";
    contador.textContent = `0/${LIMITE_CARACTERES}`;
});