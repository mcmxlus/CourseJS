

function crypto(text){
   const arr = text.split("").reverse()
   const [a,b,c,d,...others] = arr
   const res = `${others.join('')}${a}${c}${b}${d}`
   return res
}
function check(cypher, password){
   const arr = cypher.split('')
   const a = arr.pop()
   const c = arr.pop()
   const b = arr.pop()
   const d = arr.pop()
   arr.unshift(a)
   arr.unshift(b)
   arr.unshift(c)
   arr.unshift(d)
   const res = arr.reverse().join('')
   return res === password ? true : false
}
console.log(check('ssapdorw', 'password'));