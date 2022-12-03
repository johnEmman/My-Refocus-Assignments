const Underweight = "Underweight";
const Normal = "Normal";
const Overweight = "Overweight";
const Obese = "Obese";


function bmi(weight, height) {
    let bmi = weight / (height**2);
    


    if(bmi < 18.5){
      return Underweight;
    }else if (bmi < 25){
      return Normal;
    }else if (bmi < 30){
      return Overweight;
    }else{
      return Obese;
    }
  }

  function testBMI(){
    const result = bmi(55, 5)
    let expected =  Obese;

    console.assert(result == expected, "Failed")
  }

  testBMI()