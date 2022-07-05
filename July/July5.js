//Original codeWars function :/
// function correctTail(bod, tail ;
  
//     sub = body.substr(bodylength-(tail.length)
    
//     if sub = tail) ;
//       return true
//     }
//     else 
//       return false

// Amended

function correctTail(body, tail){
    let sub = body.substr((body.length)-(tail.length))
      
      if (sub == tail){
        return true
      }
      else 
        return false
  }



correctTail("Fox", "x"), true
correctTail("Rhino", "o"), true
correctTail("Meerkat", "t"), true