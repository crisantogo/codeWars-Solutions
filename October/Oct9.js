// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100 'A'
// 80 <= score <   90 'B'
// 70 <= score <   80 'C'
// 60 <= score <   70 'D'
// 0 <= score  <   60 'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    // Code here
    let avg=(s1+s2+s3)/3
    switch (true) {   //switch value must equate to true for each case statement in order for switch/case to work
        case avg>=90: 
            console.log('A')
            break;
        case avg>=80 && avg<90:
            console.log('B')
            break;
        case avg>=70 && avg<80:
            console.log('C')
            break;
        case avg>=60 && avg<70:
            console.log('D')
            break;
        case avg>=0 && avg<60:
            console.log('F')
            break;
        default:
            break;
    }

}

getGrade(95,90,93), 'A'
getGrade(70,70,100), 'B'
getGrade(70,70,70), 'C'
getGrade(65,70,59), 'D'
getGrade(44,55,52), 'F'