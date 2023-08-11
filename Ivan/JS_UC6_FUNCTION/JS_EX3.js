

var tempC = 47

function calculo() {

    let tempF = (tempC * 9 / 5) + 32
    console.log(tempC + "°C em Fahrenheit é " + tempF + "°F")

    let tempK = (tempC + 273.15)
    console.log(tempC + "°C em Kelvin é " + tempK + "°K")
}
calculo()