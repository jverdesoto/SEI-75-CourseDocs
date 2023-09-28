function hammingDistance(str1, str2){
    const differentCharacters = []
    if (str1.length !== str2.length){
        return NaN
    }
    for (let i = 0; i < str1.length; i ++){
        if (str1[i] !== str2[i]){
            differentCharacters.push(str1[i])
        }
    }
    return differentCharacters.length
}

console.log (hammingDistance('abc', 'bcb'))

const string = 'HELLOWORLD'
console.log(string[2]);

module.exports = { hammingDistance }