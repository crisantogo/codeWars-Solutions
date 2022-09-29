//Complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

function mouthSize(animal) {
    // code here
   return animal.toLowerCase()=='alligator'?'small':'wide'
}

