//P- Work out what number day of the year it is given Array with the date e.g. [1,1,2023]=>1. Don't forget to account for a leap year.
//R- A number
//E- toDayOfYear([25, 12, 2017]), 359
//P- 


function toDayOfYear(arr) {
    // return a number
    let daysBefore=0
    
    switch (arr[1]) {
        case 1:
            daysBefore=0
            break;
        case 2:
            daysBefore=31
            break;
        case 3:
            daysBefore=59
            break;
        case 4:
            daysBefore=90
            break;
        case 5:
            daysBefore=120
            break;
        case 6:
            daysBefore=151
            break;
        case 7:
            daysBefore=181
            break;
        case 8:
            daysBefore=212
            break;
        case 9:
            daysBefore=243
            break;
        case 10:
            daysBefore=273
            break;
        case 11:
            daysBefore=304
            break;
        case 12:
            daysBefore=334
            break;
            
        default:
            break;
    }
    console.log(daysBefore)
}
        

toDayOfYear([25, 12, 2017]), 359
toDayOfYear([31, 10, 1991]), 304
toDayOfYear([1, 5, 3000]), 121
toDayOfYear([31, 12, 2000]), 366
toDayOfYear([31, 12, 2100]), 365