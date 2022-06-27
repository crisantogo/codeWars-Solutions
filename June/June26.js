//P- Your task is correct the errors in the digitised text. You only have to handle the following mistakes: S is misinterpreted as 5
//        O is misinterpreted as 0
//        I is misinterpreted as 1
//R- A String containing ONLY letters
//E- correct("L0ND0N"),"LONDON"
//P-

function correct(string){
    const mistake={
        '0': 'O',
        '5': 'S',
        '1': 'I'
    }
    let newString= string.split('').map(num=>num in mistake?mistake[num]:num).join('')
    console.log(newString)
// Solution 2:-
//     string = string.split('');
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === '5') string[i] = 'S';
//     else if (string[i] === '0') string[i] = 'O';
//     else if (string[i] === '1') string[i] = 'I';
//     }
//   console.log(string.join(''));
   
}






correct("L0ND0N") //"LONDON"