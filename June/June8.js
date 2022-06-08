//Using two functions, return the max and min number from an array

var min = function(list){
    list= list.sort((a,b)=>a-b)
    return list[0];
}

var max = function(list){
    list= list.sort((a,b)=>a-b)
    return list[list.length-1];
}
// Codewars solution using spread syntax,
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list)

min([-52, 56, 30, 29, -54, 0, -110]), //-110
min([42, 54, 65, 87, 0]), //0
max([4,6,2,1,9,63,-134,566]), //566
max([5]) //5