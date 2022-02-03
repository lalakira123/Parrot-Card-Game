const cartas = []
const versoCartas = [
    "imagens/bobrossparrot.gif",
    "imagens/explodyparrot.gif",
    "imagens/fiestaparrot.gif",
    "imagens/metalparrot.gif",
    "imagens/revertitparrot.gif",
    "imagens/tripletsparrot.gif",
    "imagens/unicornparrot.gif"
]

function distribuirCartas() {
    //Escolhe numero de cartas
    let numeroCartas = null
    do {
        numeroCartas = parseInt(prompt("Quantas cartas você deseja? (número pares de 4 a 14)"))
    } while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas%2 !== 0)

    //Armazena as Cartas em um Array
    let contagem = 0
    while (contagem < numeroCartas/2) {
        contagem = contagem + 1
        carta = `<section class="carta papagaio${contagem}" onclick="virarCarta(this)">
                    <div class="front-face face">
                        <img src="imagens/front.png">
                    </div>
                    <div class="back-face face">
                        <img src="${versoCartas[contagem - 1]}">
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

function virarCarta(elemento) {

}

function comparador() { 
	return Math.random() - 0.5; 
}

distribuirCartas()