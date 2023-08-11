

var capital = 1200
var taxa = 0.8
var tempo = 12

function JurosComposto() {

    let juros = capital * ((1 + taxa) ^ tempo)
    console.log("O juros será de: " + juros)
}
JurosComposto()