//P- Given a playing card in the form of a string. String contains the card number and suit symbol
//R- Return a string with the suit as a word
//E- ('3♣') -> return 'clubs'
//   ('3♦') -> return 'diamonds'
//   ('3♥') -> return 'hearts'
//   ('3♠') -> return 'spades'
//P- Create a function that accepts the string as a parameter
// - Split string using the .split('') method
// - Use conditionals to return cardSuit[1]

function defineSuit(card) {
    // good luck
    let cardSuit= card.split('')
    // Use Array.length-1 to get the last element. Returns error/undefined for the no.10
    let suit=cardSuit[cardSuit.length-1]
    if(suit==='♠'){
        console.log('spades')
    }else if(suit==='♥'){
        console.log('hearts')
    }else if(suit==='♦'){
        console.log('diamonds')
    }else
        console.log('clubs')
    
  }
// OOP Solution-
//   function defineSuit(card) {
//     const s = {
//       "♣": "clubs",
//       "♠": "spades",
//       "♦": "diamonds",
//       "♥": "hearts"
//     }
//     return s[card.charAt(card.length - 1)]
//   }


  defineSuit('Q♠') //'spades'
  defineSuit('3♣') //'clubs'
  defineSuit('9♦') //'diamonds'
  defineSuit('J♥') //'hearts'