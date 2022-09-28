// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

function distinct(a) {
    console.log([...new Set(a)])
    //Alternatively;
    //const distinct = a => a.filter((item, index) => a.indexOf(item) === index)
}

distinct([1,1,2]), [1,2]