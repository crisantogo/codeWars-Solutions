// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(s){
    let arr = s.split(' ').filter((x,i)=>x!=s.split(' ')[i+1])
    return arr.join(' ')
}