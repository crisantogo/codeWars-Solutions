// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let index = weight/Math.pow(height,2)

    switch (true) {
        case (index<=18.5):
            console.log("Underweight")
            break;
        case(index>18.5 && index<=25):
            console.log("Normal")
            break;
        case(index>25 && index<=30):
            console.log("Overweight")
            break;
        default:
            console.log("Obese")
            break;
    }
}

bmi(80, 1.80), "Normal"