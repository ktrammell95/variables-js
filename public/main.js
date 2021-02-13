function main() {
  
  const numberOfCupsOfCoffee = 6

  const fullName = "Katherine Trammell"

  console.log(`${fullName} drinks ${numberOfCupsOfCoffee} each day`)

  const aboutMe = {
    fullName: 'Katherine Trammell',
    luckyNumber: 13,
    favoriteMovies: ['Princess Bride', 'Labyrinth', 'Anastasia'],
    
  }
  console.log(aboutMe)

  // const userName = window.prompt('What is your name?')
  // console.log(`Hello ${userName}, it is nice to meet you!`)

  const numberOne = window.prompt('Give me a number')
  const numberTwo = window.prompt('Give me a another number')
  
  // Testing that entry is a string
  // console.log(numberOne)
  // console.log(numberTwo)

  var firstOperand = parseFloat(numberOne)
  var secondOperand = parseFloat(numberTwo)

  // Testing that results are now Integers
  console.log(firstOperand)
  console.log(secondOperand)

  const sum = firstOperand + secondOperand
  const difference = firstOperand - secondOperand
  const product = firstOperand * secondOperand
  const quotient = firstOperand / secondOperand
  const remainder = firstOperand % secondOperand

  console.log(sum)
  console.log(difference)
  console.log(product)
  console.log(quotient)
  console.log(remainder)


}

document.addEventListener('DOMContentLoaded', main)
