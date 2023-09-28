// const p = new Promise(function(resolve, reject) {
//     const value = 42;
//     resolve(value);
//   });
  
//   p.then(function(result) {
//     console.log(result);
//   });

// const p = new Promise(function(resolve, reject) {
//    //Success
//     setTimeout(function(){
//         resolve('Timed Out!')
//     }, 2000)

//     //Failure
//     setTimeout(function() {
//         reject('Something went wrong!');
//       }, 2000);
//   });

//   console.log(p);

//   p.then(function(result) {
//     console.log(result)
//   }).catch(function(err) {
//     console.log(err)
//   })

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

// 

// function index(req, res) {
//     Movie.find({}).then(function(movies) {
//       res.render('movies/index', { movies });
//     });
//   }

//   async function index(req, res) {
//     // await the find() method's promise to resolve
//     const movies = await Movie.find({});
//     res.render('movies/index', { movies });
//   }

// function asyncAdd(a, b, delay) {
//     return new Promise(function(resolve) {
//       setTimeout(function() {
//         resolve(a + b);
//       }, delay);
//     });
//   }


//   asyncAdd(5, 10, 2000)
//   .then(function(sum) {
//     console.log(sum);
//     return asyncAdd(sum, 100, 1000);
//   })
//   .then(function(sum) {
//     console.log(sum);
//     return asyncAdd(sum, 1000, 2000);
//   })
//   .then(function(sum) {
//     console.log(sum);
//   });

(async function() {
    let sum = await asyncAdd(5, 10, 200);
    console.log(sum);
    let sum2 = await asyncAdd(sum, 100, 1000);
    console.log(sum);
    let sum3 = await asyncAdd(sum, 1000, 2000);
    console.log(sum);
})();


// function asyncAdd(a, b, delay) {
//     return new Promise(function(resolve) {
//       setTimeout(function() {
//         resolve(a + b);
//       }, delay);
//     });
//   }