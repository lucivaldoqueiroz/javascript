var nomeDoPersonagem = prompt("Nome do personagem");
var poderDeAtaquePersonagem = prompt('Poder de ataque do personagem');

var nomeDoPersonagem2 = prompt("Nome do personagem 2");
var PontosDeVidaPersonagem2 = prompt("Pontos de vida do personagem 2");
var poderDefesaPersonagem2 = prompt('Poder de defesa do personagem');
var PossuiEscudo = prompt('Possui Escudo? Sim ou não ?');

//regra
/*Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.*/
if(poderDeAtaquePersonagem > poderDefesaPersonagem2 && PossuiEscudo === "não") {
    var dano = poderDeAtaquePersonagem - poderDefesaPersonagem2
/*Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.*/
} else if (poderDeAtaquePersonagem > poderDefesaPersonagem2 && PossuiEscudo === "sim"){
    var dano = (poderDeAtaquePersonagem - poderDefesaPersonagem2)/2
    /*Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.*/
}

var pontosVidaRestante = PontosDeVidaPersonagem2 - dano

alert(
    "\nPoder de Ataque: " + poderDeAtaquePersonagem +
    "\nPoder De Defesa: " + poderDefesaPersonagem2 +
    "\nEscudo: " + PossuiEscudo + 
    "\nDano Causado: " + dano +
    "\nVida do Defensor: " + PontosDeVidaPersonagem2 +
    "\nVida Restante do Defensor: " + pontosVidaRestante
)