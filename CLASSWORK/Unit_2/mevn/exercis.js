// function hammingDistance (x,y) {
// let xSplit = x.split("")
// let ySplit= y.split("")
// let count = 0
// if (xSplit.length !== ySplit.length){
//     console.log('NaN'); 
// }else {
//     for(let i=0 ; i<xSplit.length ; i++){
//         if (xSplit[i] !== ySplit[i]){
//             count ++
//         }

//     }
//     console.log(count);
// }
// }
// hammingDistance('a1c', 'a2c')

// var player = makeGamePlayer("John Smith", 15, 3)
// function makeGamePlayer(name, totalScore, gamesPlayed) {
//     // Define desired object
//     var obj = {
//       name:  name,
//       totalScore: totalScore,
//       gamesPlayed: gamesPlayed
//     };
//     // Return it
//     return obj;
//   }
//   console.log(player);

// function fromPairs (array){
// array.map((nestArr) => {

// })
// }
// var a = [1,2,3,4,5,1,-1,6,7,8,9,10,2,11];

// var minNumber = a.reduce(function(prev,cur) {
//     return prev < cur ? prev : cur;
// }, +Infinity);

// var maxNumber = a.reduce(function(prev,cur) {
//     return prev > cur ? prev : cur;
// }, -Infinity);
// console.log(minNumber);
// console.log(maxNumber);
 function mumble (string) {
    let strSplit = string.split("")
    // console.log(strSplit);
    let mmbl = " "
    for ( let i = 0 ; i < strSplit.length ; i ++){
       mmbl += `${strSplit[i].repeat(i+1)}-`
    }
    console.log(JSON.stringify(mmbl));
 }
 console.log(mumble('!@65gn'));
 