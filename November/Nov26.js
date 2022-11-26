// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    let vowels=['a', 'e', 'i','o','u']
    str=str.split('').filter(l=>l= !vowels.includes(l.toLowerCase())).join('')
    console.log(str)
}

disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"
disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?"