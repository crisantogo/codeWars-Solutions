//P- Write a function findNeedle() that takes an array full of junk but containing one "needle"
//R- A message (as a String) that says:- "found the needle at position " plus the index it found the needle
//E- ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
//P- 

function findNeedle(haystack) {
    // your code here
    haystack.map((e,i)=>{
        if(e==='needle'){
            console.log(`found the needle at position ${i}`)
        }
    })
}

findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])
findNeedle( ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'])
findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54])