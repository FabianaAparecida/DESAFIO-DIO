// Variáveis
var nomeDoHeroi = "Super Homem";
var experiencia = 8000;

// Estrutura de decisão
var nivel;

if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia <= 10000) {
    nivel = "Imortal";
} else if (experiencia >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Erro - Nível não reconhecido";
}

// Saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);
