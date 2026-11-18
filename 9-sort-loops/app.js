const arr = [0, 40, -5, 10, 0]

for (let i = -1; i < arr.length; i++) {
   for (let j = -1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
         [arr[i], arr[j]] = [arr[j], arr[i]]
      }
   }
}
console.log(arr);