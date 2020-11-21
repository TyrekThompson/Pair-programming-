// Make an array
let array = [10, 18, 19, 29, 33, 35, 47, 66, 83]

// Create sortsPrime function to get out prime numbers
function sortPrime(array) {
    let primeArr = new Array;


    // Use filter method to get prime numbers and push to primeArr
    array.filter((ele) => {
        //Iterate over each index and get prime numbers
        for (var i = 2; i <= Math.sqrt(ele); i++) {
            if (ele % i === 0) return false;
        }
        return primeArr.push(ele);
    });


    console.log(primeArr);

}

sortPrime(array);
