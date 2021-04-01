let numeroSecreto = 4;

let tentativas = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt("Digite um número entre 0 e 10: "));

    if (chute == numeroSecreto) {
        alert("Parabéns, você acertou!");
        break;
    } else {
        alert("Que pena, tente de novo.");
        tentativas = tentativas - 1;
    }
}