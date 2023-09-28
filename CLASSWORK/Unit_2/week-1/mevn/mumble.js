function mumble(str){
    const finalString = []
    for (let i = 0; i < str.length; i++){
        const letter = str[i]
        let repeatedLetter = ''
        for (let j = 0; j < i+1; j++){
            repeatedLetter += letter
        }
        finalString.push(repeatedLetter)
    }
    return finalString.join('-')
}

console.log(mumble('abc'));

module.exports = { mumble }