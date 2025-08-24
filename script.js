/* Removed all comments and simplified function names for more personal feel */
function showPI() {
  const result = document.getElementById("pi-result")
  result.innerHTML = `π = ${Math.PI.toFixed(8)}`
}

function calculateAbs() {
  const input = document.getElementById("abs-input").value
  const result = document.getElementById("abs-result")

  if (input === "") {
    result.innerHTML = "Ingresa un número"
    return
  }

  const number = Number.parseFloat(input)
  const absolute = Math.abs(number)
  result.innerHTML = `|${number}| = ${absolute}`
}

function calculateRound() {
  const input = document.getElementById("round-input").value
  const result = document.getElementById("round-result")

  if (input === "") {
    result.innerHTML = "Ingresa un número"
    return
  }

  const number = Number.parseFloat(input)
  const rounded = Math.round(number)
  result.innerHTML = `${number} ≈ ${rounded}`
}

function calculateCeil() {
  const input = document.getElementById("ceil-input").value
  const result = document.getElementById("ceil-result")

  if (input === "") {
    result.innerHTML = "Ingresa un número"
    return
  }

  const number = Number.parseFloat(input)
  const ceiling = Math.ceil(number)
  result.innerHTML = `⌈${number}⌉ = ${ceiling}`
}

function calculateFloor() {
  const input = document.getElementById("floor-input").value
  const result = document.getElementById("floor-result")

  if (input === "") {
    result.innerHTML = "Ingresa un número"
    return
  }

  const number = Number.parseFloat(input)
  const floor = Math.floor(number)
  result.innerHTML = `⌊${number}⌋ = ${floor}`
}

function generateRandom() {
  const result = document.getElementById("random-result")
  const randomNumber = Math.random()
  result.innerHTML = `Aleatorio: ${randomNumber.toFixed(6)}`
}

function calculatePow() {
  const base = document.getElementById("pow-base").value
  const exponent = document.getElementById("pow-exponent").value
  const result = document.getElementById("pow-result")

  if (base === "" || exponent === "") {
    result.innerHTML = "Completa ambos campos"
    return
  }

  const baseNum = Number.parseFloat(base)
  const expNum = Number.parseFloat(exponent)
  const power = Math.pow(baseNum, expNum)
  result.innerHTML = `${baseNum}^${expNum} = ${power}`
}

function calculateSqrt() {
  const input = document.getElementById("sqrt-input").value
  const result = document.getElementById("sqrt-result")

  if (input === "") {
    result.innerHTML = "Ingresa un número"
    return
  }

  const number = Number.parseFloat(input)

  if (number < 0) {
    result.innerHTML = "No se puede calcular √ de números negativos"
    return
  }

  const sqrt = Math.sqrt(number)
  result.innerHTML = `√${number} = ${sqrt.toFixed(4)}`
}
