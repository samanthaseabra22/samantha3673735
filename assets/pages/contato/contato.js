let emailVar = "";
let nameVar = "";

//função que impede o user de digitar números e caracteres especiais no campo de nome
function validarNome(name) {
  name.value = name.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
  if (name.value != "") {
    nameVar = name.value;
  }
}
//funçaõ que verifcar se o email é válido com expressão regular
function validarEmail(email) {
  emailVar = email.value;
}

function entrarEmContato() {
  event.preventDefault(); // Impede o envio do formulário
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ^[^\s@]+@[^\s@]+\.[^\s@]+$ é a expressão regular que valida um endereço de e-mail
  const message = document.querySelector("#message").value; //armazena a message que user deseja enviar
  const emailError = document.getElementById("email-error"); //messagem de erro

  //metódo teste é usado para verificar se o endereço de e-mail passado corresponde a essa expressão regular.
  if (regexEmail.test(emailVar)) {
    emailError.style.display = "none";
    alert(`Obrigado ${nameVar} por entrar em contato!`);
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  } else {
    emailError.style.display = "block";
    return;
  }
}
