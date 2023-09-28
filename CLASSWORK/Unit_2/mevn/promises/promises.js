

const p = new Promise(function (resolve, reject) {

  // // Success
  // setTimeout(function() {
  //   resolve('Timed out')
  // }, 2000)

  //Failure
  setTimeout(function () {
    reject('error')
  }, 2000)
})

console.log(p);


p.then(function (result) {
  console.log(result);
}).catch(function(err){
  console.log(err);
}) 