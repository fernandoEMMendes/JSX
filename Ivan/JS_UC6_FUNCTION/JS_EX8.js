

var cap_inicial = 1200
var tempo_mes = 6
var tax_juros = 0.60


function Juros() {
    let juro = cap_inicial * ((tax_juros + 1) ^ tempo_mes)
    let composto = cap_inicial + juro

    let juro2 = (cap_inicial * tax_juros)
    let simples = cap_inicial + (juro2 * tempo_mes)

    console.log("Em juros simples:" + simples + " e em juros composto:" + composto)
}
Juros()