// const p = new Promise((resolve, reject) => {
//     // // Success
//     // setTimeout(() => resolve('Timed out!'), 2000)
//     //Failure
//     setTimeout(() => reject('Something went wrong!'), 2000)
// })
// .then(result => console.log(result))
// .catch(err => console.log(err))

function asyncAdd(a, b, delay) {
    return new Promise(resolve => {
      setTimeout(() => (resolve(a + b)), delay);
    });
  }

//   asyncAdd(5, 10, 2000)
//   .then(sum => {
//     console.log(sum);
//     return asyncAdd(sum, 100, 1000);
//   })
//   .then(sum => {
//     console.log(sum);
//     return asyncAdd(sum, 1000, 2000);
//   })
//   .then(sum => {
//     console.log(sum);
//   });

async function asyncAwait() {
    let sum = await asyncAdd(5, 10, 2000);
    console.log(sum);
    sum = await asyncAdd(sum, 100, 1000);
    console.log(sum);
    sum = await asyncAdd(sum, 1000, 2000);
    console.log(sum);
}

asyncAwait()