var tentativas = 3;

function verificarSenha() {
    var senhaDigitada = document.getElementById("senhaInput").value;
    var resultadoElement = document.getElementById("resultado");

    // Senha correta (altere para sua senha desejada)
    var senhaCorreta = "mundodossonhos";

    if (senhaDigitada === senhaCorreta) {
        resultadoElement.innerHTML = "<strong>amo livros, só não mais que acrônimos</strong>";
    } else {
        tentativas--;
        if (tentativas > 0) {
            resultadoElement.innerHTML = "Senha incorreta. Você tem mais " + tentativas + " tentativas.";
        } else {
            resultadoElement.innerHTML = "Você falhou :)";
            document.getElementById("senhaInput").disabled = true;
            document.querySelector("button").disabled = true;
        }
    }
}
