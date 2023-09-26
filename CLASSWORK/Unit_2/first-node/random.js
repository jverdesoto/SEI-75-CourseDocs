// const min = 1
// const max = 10

// module.exports = {
//     min,
//     max,
//     random
// }

// function random(min,max) {
//     Math.floor(Math.random() * (max - min + 1) + min);
    
// }

module.exports = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};