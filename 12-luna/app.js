const cardNumber = "4561-2612-1234-5464"

function validationCardNumber (card) {
   const sum = card
   .replace(/\D/g, "")
   .split("")
   .map(Number)
   .reduce((acc, el, index) => {
      const doubled = el * 2
      if (index % 2 === 0) {
         doubled > 9 ? acc += doubled - 9 : acc += doubled
      } else {
         acc += el
      }
      return acc
   }, 0)

   return sum % 10 === 0;
}

console.log(validationCardNumber(cardNumber));