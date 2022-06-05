//P- If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son."
//R- A String based on a conditional
//E- chromosomeCheck('XY'), "Congratulations! You're going to have a son."
//   chromosomeCheck('XX'), "Congratulations! You're going to have a daughter."
//P-

function chromosomeCheck(sperm) {
  return sperm=='XY'? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}




chromosomeCheck('XY') //"Congratulations! You're going to have a son."
chromosomeCheck('XX') //"Congratulations! You're going to have a daughter."