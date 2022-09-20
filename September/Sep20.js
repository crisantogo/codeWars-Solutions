//P- Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
//R- Return the number of days that are in month
//E- howManydays(1),31

function howManydays(month){
    switch (month) {
        case 1:
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31)
            break;
        case 4:
        case 6: 
        case 9:
        case 11:
            console.log(30)
            break;
        default:
            console.log(28)
            break;
    }
}

howManydays(1),31
howManydays(2),28
howManydays(3),31
howManydays(4),30
howManydays(12),31
