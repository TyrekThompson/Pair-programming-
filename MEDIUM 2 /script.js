// Create function with two string arguments
let string1 = "So dark the con of man";
let string2 = "Madonna of the Rocks";

let anagram = (a, b) => {
    // Determine wheter they are an anagram 
    let isAnagram = false;
    // Use regex to get rid of spaces
    let result1 = a.replace(/ /g, '').toLowerCase()
    
    // Use split method to give each letter its own index
    let firstArr = result1.split('');
    firstArr.sort();

    let result2 = b.replace(/ /g, '').toLowerCase()
    
    let secArr = result2.split('');
    secArr.sort();

    if (firstArr.length === secArr.length) {
        for (let i = 0; i < firstArr.length; i++) {
            if(firstArr[i] === secArr[i]) {
                isAnagram = true;
                return console.log(isAnagram);
            }
        }
    } else {
        return console.log(isAnagram);
    }


    

    console.log(firstArr)
    console.log(secArr)

}

console.log(string1, string2)


// Output is a boolean