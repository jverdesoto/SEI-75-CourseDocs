/*-----------------------------------------------------------------
Challenge: fromPairs
Difficulty: Intermediate
Prompt:
- Write a function named fromPairs that creates an object from an array containing nested arrays.
- Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
Examples:
fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
-----------------------------------------------------------------*/

//function fromPairs
//declare variable that holds an empty object 
//loop through the arrays
//For each nested array, extract the first element as the key and the second element as the value.
//check if the firs element or key already exists in the object
//if it already exists override the last valye with the new value
//if it doesnt exist create a newvalue pair in the object
//return value of that object

function fromPairs(arr) {
    let keyValuePairs = {}
    for(let i = 0; i < arr.length; i++) {
       // console.log(arr[i])
        // for(let i = 0; i< arr[i][1]; i++)
         
           if(keyValuePairs.hasOwnProperty(key)) {

           } else {

           }
        
    }
}

function fromPairs(arr) {
    let keyValuePairs = {}; // Initialize an empty object to store key-value pairs

    for (let i = 0; i < arr.length; i++) {
        const nestedArray = arr[i];
        const key = nestedArray[0]; // Extract the key
        const value = nestedArray[1]; // Extract the value
        
        if (keyValuePairs.hasOwnProperty(key)) {
            // Key already exists, update its value
            keyValuePairs[key] = value;
        } else {
            // Key doesn't exist, create a new key-value pair
            keyValuePairs[key] = value;
        }
    }

    return keyValuePairs; // Return the object with key-value pairs
}

item.wardrobeItems

function categoryItems(items) {
	let categories = {}
    for (let i = 0; i <items.length; i++) {
        const item = items[i];
        const category = item.category
        if(categories.category) {

        } else {

        }
    }
}



function categorizeItems(items) {
    let categories = {
        
    };

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const category = item.category;

        if (categories.hasOwnProperty(category)) {
            categories[category].push(item);
        } else {
            categories[category] = [item];
        }
    }

    return categories;
}



//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function oddsAndEvens(array) {
//   let even = [];
//   let odd = [];
//   array.map((eachNumber) => {
//       if (eachNumber % 2 === 0) {
//           even.push(eachNumber);
//       } else {
//           odd.push(eachNumber);
//       }  
//   });
//   return [even, odd];
// }
