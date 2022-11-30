// Given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552
// You will be receiving values higher than 10, all valid.

function nextPal(val) {
    /* your code here */
    for(i=val+1;;i++){
        let palin=String(i)
        if(palin===palin.split('').reverse().join('')){
            break;
        }
    }
    console.log(i)
}

nextPal(188),  191
nextPal(191),  202
nextPal(2541), 2552