const cartas = []
const frenteCartas = [
    "imagens/bobrossparrot.gif",
    "imagens/explodyparrot.gif",
    "imagens/fiestaparrot.gif",
    "imagens/metalparrot.gif",
    "imagens/revertitparrot.gif",
    "imagens/tripletsparrot.gif",
    "imagens/unicornparrot.gif"
]
let caixaComparativa = []
let contadorJogada = 0
let cartaVirada = 0
let cartaCombinada = 0
let jogando = false

function distribuirCartas() {
    //Escolhe numero de cartas
    do {
        numeroCartas = parseInt(prompt("Quantas cartas você deseja? (número pares de 4 a 14)"))
        maximaCombinacao = numeroCartas/2
    } while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas%2 !== 0)

    //Armazena as Cartas em um Array
    let contagem = 0
    while (contagem < numeroCartas/2) {
        contagem = contagem + 1
        carta = `<section class="carta" onclick="jogarRodada(this)" data-identifier="card">
                    <div class="verso face" data-identifier="back-face">
                        <img src="${frenteCartas[contagem - 1]}">
                    </div>
                    <div class="frente face" data-identifier="front-face">
                        <img src="imagens/front.png">
                    </div>
                </section>` 
        cartas.push(carta)
        cartas.push(carta)
    }

    //Embaralha
    cartas.sort(comparador)

    //Adiciona no HTML percorrendo o Array
    for ( i = 0; i < cartas.length; i++) {
        const elemento = document.querySelector("main")
        elemento.innerHTML = elemento.innerHTML + cartas[i]
    }
} 

function jogarRodada(cartaClicada) {
    if (cartaClicada.querySelector(".carta .girarParaTras") === null && cartaVirada <= 2 && jogando == false) {
        caixaComparativa[cartaVirada] = cartaClicada.innerHTML
        caixaComparativa[cartaVirada + 2] = cartaClicada
        contadorJogada++
        cartaVirada++
        virarCarta(cartaClicada)
        if (caixaComparativa[0] == caixaComparativa[1] && cartaVirada === 2) {
            cartaVirada = 0
            caixaComparativa = []
            cartaCombinada++
            setTimeout(finalizarJogo, 1000)
        } else if (caixaComparativa[0] !== caixaComparativa[1] && cartaVirada == 2) {
            cartaVirada = 0
            setTimeout(desvirarCarta, 1000)
        }
    }
}

function virarCarta(cartaClicada) {
    cartaClicada.children[0].classList.toggle("girarParaFrente")
    cartaClicada.children[0].classList.toggle("verso")
    cartaClicada.children[1].classList.toggle("girarParaTras")
}

function desvirarCarta() {
    caixaComparativa[2].children[0].classList.toggle("girarParaFrente")
    caixaComparativa[2].children[1].classList.toggle("girarParaTras")
    caixaComparativa[2].children[0].classList.toggle("verso")
    caixaComparativa[3].children[0].classList.toggle("girarParaFrente")
    caixaComparativa[3].children[1].classList.toggle("girarParaTras")
    caixaComparativa[3].children[0].classList.toggle("verso")
    caixaComparativa = []
}

function finalizarJogo() {
    if (maximaCombinacao == cartaCombinada) {
        alert(`Você ganhou em ${contadorJogada} jogadas!`)
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

distribuirCartas()

