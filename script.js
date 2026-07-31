let email = document.querySelector(".contatoEmail");
let botao = document.querySelector(".butEnviar");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

botao.addEventListener("click", function () {
    if (regexEmail.test(email.value)) {
        
    }
})