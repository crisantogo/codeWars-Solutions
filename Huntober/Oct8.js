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

    if (arr[2]%100==0 && arr[2]%400==0) {
        console.log(daysBefore + 1 + arr[0])
    } else if(arr[2]%4==0 && arr[2]%100==0 && arr[2]%400!=0){
        console.log(daysBefore + arr[0])
    } else if(arr[2]%4==0 && arr[1]==1){
        console.log(daysBefore + arr[0])
    } else if(arr[2]%4==0 && arr[1]==2 && arr[0]<=28){
        console.log(daysBefore + arr[0])
    } else if(arr[2]%4==0){
        console.log(daysBefore + 1 + arr[0])
    } else {
        console.log(daysBefore + arr[0])
    }

    //Codewars solution;
    // const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // let day = 0;
  
    // Check if leap year and if so change number of days in february to 29
    // if(arr[2]%4 == 0 && arr[2] %100 != 0 || arr[2]%400 == 0){ daysInMonth[1] = 29; }
  
    // Add the days of the current month
    // day += arr[0];
  
    // Add all the days of the previous months
    // for(let i = 0; i < arr[1] - 1; i++){
        // day += daysInMonth[i];
    // }
  
    // return day;

    // Using Date;
    // return (new Date(arr[2],arr[1]-1,arr[0]).getTime()-new Date(arr[2],0,0).getTime())/1000/60/60/24
}
        

toDayOfYear([25, 12, 2017]), 359
toDayOfYear([31, 10, 1991]), 304
toDayOfYear([1, 5, 3000]), 121
toDayOfYear([31, 12, 2000]), 366
toDayOfYear([31, 12, 2100]), 365