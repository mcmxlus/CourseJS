function converter(value, original, target){
   switch(true){
      case original === "rub" && target === "usd":
         return value / 85
      case original === "rub" && target === "eur":
         return value / 95
      case original === "usd" && target === "rub":
         return value * 85
      case original === "usd" && target === "eur":
         return value * 0.87
      case original === "eur" && target === "usd":
         return value / 0.87
      case original === "eur" && target === "rub":
         return value * 95
      default:
         return null
   }
}

console.log(converter(100, 'rub', 'dol'));