var massTom = 8;
var heighTom = 9;
 
var massJerry = 45;
var heighJerry = 10;
 
var BMIMark = heighTom / (heighTom * heighTom);
var BMIJerry = massJerry / (massJerry * massJerry);


if(BMIJerry>BMIMark) {
     console.log('Jerry BMI is greather than Mark BMI');
 }else if(BMIJerry<BMIMark){
console.log('Mark BMI is greather than Jerry BMI');
 }


var heigherBMI =(heighTom >massJerry);
console.log(' Is Tom \'s BMI higher tha Jerry\'s ?' + heigherBMI);
 
