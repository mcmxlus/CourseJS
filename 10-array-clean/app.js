const array = [1,2,3,4,5,6,7,8,9,0];

function cleanArray (arr, fn) {
   let result = []
   for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
         continue
      } else {
         result.push(arr[i])
      }
   }
   return result
}
console.log(cleanArray(array, (num) => num > 5 ? true : false));
console.log(array);