function hammingDistance(string1, string2) {
    let string1Arr = string1.split("");
    let string2Arr = string2.split("");
    
    if (string1Arr.length !== string2Arr.length) {
        console.log("Strings must be the same length");
    }
    else {
        let differences = 0;
        for (let i = 0; i < string1Arr.length; i++) {
            if (string1Arr[i]!==string2Arr[i]) {
                differences++; 
            }
        }
        console.log("The hamming distance of" + " " + string1 + " " + "and" + " " + string2 + " " + "=" + " " + differences);
    }
}

hammingDistance('a1c', 'a2c');


// split them into arrays
// compare each index of both arrays
// record how many differences
// only allow equal length strings