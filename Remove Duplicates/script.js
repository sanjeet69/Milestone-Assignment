function myArgunments(){
let  args = Array.from( arguments)
let  finalArr = args.map(e => e *5)
console.log(finalArr)
}

myArgunments(25, 34, 4, 89)