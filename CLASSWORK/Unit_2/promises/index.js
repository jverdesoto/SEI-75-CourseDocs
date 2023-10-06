// const p = new Promise(function(resolve, reject) {
    
//     // Success 
//     setTimeout(function() {
//         resolve('Timed Out!')
//     }, 2000)
    
//     // Failure
//     setTimeout(function() {
//       reject('Something went wrong!');
//     }, 2000);
//   });
// console.log(p)

// p.then(function(result) {
//     console.log(result);
//   }).catch(function(err) {
//     console.log(err);
//   });

// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('hello');
//     }, 2000);
//   });
  
//   p.then(function(result) {
//     console.log(result);  // -> hello
//     return 42;
//   }).then(function(result) {
//     console.log(result);  // -> 42
//     return 'Done!'
//   }).then(function(result) {
//     console.log(result);  // -> Done!
//   });


function asyncAdd(a, b, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(a+b)
        }, delay)
    })
}

// asyncAdd(5, 10, 2000)
// .then(function(sum){
//     console.log(sum)
//     return asyncAdd(sum, 100, 1000)
// })
// .then(function(sum){
//     console.log(sum)
//     return asyncAdd(sum, 1000, 2000)
// })
// .then(function(sum){
//     console.log(sum)
// })

(async function() {  //this function contains asynchronous code
    let sum = await asyncAdd(5, 10, 2000)
    console.log(sum)
    let sum2 = await asyncAdd(sum, 1000, 1000)
    console.log(sum2)
    let sum3 = await asyncAdd(sum2, 1000, 2000)
    console.log(sum3)
}) () // immediately call the function


