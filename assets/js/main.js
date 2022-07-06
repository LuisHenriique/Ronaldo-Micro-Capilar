// não é um numero  =  num
// divisilvel por 3 &  5  = fizzBUzz
// divisivel por 3 = fizz
// divisivel por 5  = buzz
// não divisilvel  = num

const numero = 5
function fizzBUzz() {
  if (typeof numero != 'number') {
    return console.log('Não é um numero')
  }
  if (numero === 0) {
    return console.log('valor invalido')
  }
  if (numero % 3 === 0 && numero % 5 === 0) {
    return console.log('FizzBUzz')
  }
  if (numero % 3 === 0) {
    return console.log('Fizz')
  }
  if (numero % 5 === 0) {
    return console.log('BUzz')
  } else {
    console.log(numero)
  }
}

fizzBUzz()
