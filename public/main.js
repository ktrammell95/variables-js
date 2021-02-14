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

  const userName = window.prompt('What is your name?')
  console.log(`Hello ${userName}, it is nice to meet you!`)

  const numberOne = window.prompt('Give me a number')
  const numberTwo = window.prompt('Give me a another number')
  
  // Testing that entry is a string
  console.log(numberOne)
  console.log(numberTwo)

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

  const numbers = [
    65,	28,	80,	56,	79,
    58,	100,	23,	13,	25,
    23,	39,	29,	62,	88,
    2,	94,	8,	35,	33,
    75,	92,	18,	24,	75,
    93,	98,	23,	62,	92,
    90,	57,	46,	97,	77,
    75,	7,	82,	48,	91,
    53,	3,	45,	15,	40,
    95,	81,	39,	23,	85,
    33,	37,	24,	2,	15,
    55,	53,	14,	15,	7,
    36,	35,	28,	79,	81,
    73,	7,	45,	77,	98,
    38,	63,	97,	43,	48,
    18,	19,	8,	65,	85,
    12,	80,	11,	11,	15,
    2,	25,	48,	72,	7,
    6,	32,	28,	6,	68,
    49,	27,	81,	35,	95
  ]

    // console.log(numbers)

  let statistics = {}

    // statistics.smallest

      var smallestNumberIndex = 0;
      var smallestNumber = numbers[0];

      for(let index = 0; index < numbers.length; index++){
        if(numbers[index] < smallestNumber) {
          smallestNumber = numbers[index]
          smallestNumberIndex = index
          statistics.smallest = smallestNumber
        }
        console.log(statistics.smallest)
      }

    // statistics.largest

      var largestNumberIndex = 0;
      var largestNumber = numbers[0];
      
      for(let index = 0; index < numbers.length; index++){
        if(numbers[index] > largestNumber) {
          largestNumber = numbers[index]
          largestNumberIndex = index
          statistics.largest = largestNumber
        }
        console.log(statistics.largest)
      }

    // statistics.sum

      let total = 0
      for(let index = 0; index < numbers.length; index++){
        total = total + numbers[index]
        statistics.sum = total
      }
      console.log(statistics.sum)
  
    // statistics.average

      for(let index = 0; index < numbers.length; index++){
        total = total + numbers[index]
        statistics.average = total/numbers.length
      }
      console.log(statistics.average)
    
      console.log(statistics)
}

document.addEventListener('DOMContentLoaded', main)
