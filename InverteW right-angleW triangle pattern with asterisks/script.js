// let n = 5;
 
// for (let i = 1; i<=n; i++){
//     for (let j =0; j<i-n; i++ ) {
//         process.stdout.write(' ');
//     }
//     for(let k = 0; k<i; k++){
//         process.stdout.write('*');
//     }
//     console.log();
// }



let n  = 5;
let string = "";
 
for (let i = 0; i<n; i++){
    for(let t = 0; t<n- i; t++ ){
        string += "*";
    }
    string += "\n";
}
console.log(string);

