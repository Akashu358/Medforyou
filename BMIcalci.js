
    function Calculate() {
      
      const height = document.getElementById('height').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const Error = "Insert valid Number";
      
      const BMI = (weight / ((height / 100) * (height / 100))).toFixed(1);
      document.getElementById('BMI').innerHTML = BMI;
      if (BMI < 16.0) {
        document.getElementById('msg').innerHTML = " You are Underweight (Severe thinness)";
        document.getElementById('msg').style.color = "FFE800";
      } else if (BMI >= 16.0 && BMI <= 16.9) {
        document.getElementById('msg').innerHTML = " You are Underweight (Moderate thinness)";
        document.getElementById('msg').style.color = "FFFF33";
      } else if (BMI >= 17.0 && BMI <= 18.4) {
        document.getElementById('msg').innerHTML = " You are Underweight (Mild thinness)";
        document.getElementById('msg').style.color = "76BA1B";
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        document.getElementById('msg').innerHTML = " You are in Normal range";
        document.getElementById('msg').style.color = "green";
      } else if (BMI >= 25.0 && BMI <= 29.9) {
        document.getElementById('msg').innerHTML = " You are Overweight (Pre-obese)";
        document.getElementById('msg').style.color = "FF2C2C";
      } else if (BMI >= 30.0 && BMI <= 34.9) {
        document.getElementById('msg').innerHTML = " You are Obese (Class I)";
        document.getElementById('msg').style.color = "D1001F";
      } else if (BMI >= 35.0 && BMI <= 39.9) {
        document.getElementById('msg').innerHTML = " You are Obese (Class II)";
        document.getElementById('msg').style.color = "C30010";
      } else if (BMI >= 40) {
        document.getElementById('msg').innerHTML = " You are Obese (Class III)";
        document.getElementById('msg').style.color = "C30010";
      } else {
        document.getElementById('BMI').innerHTML = '"Invalid Input"';
        document.getElementById('msg').innerHTML = Error;
        document.getElementById('msg').style.color = "orange";
        document.getElementById('msg').style.fontSize = "28px";
        document.getElementById('msg').style.fontWeight = "700";
        
      }
    }
