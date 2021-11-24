console.log("Unit Conversion");

let inches = 42;
let feet = inches / 12;
let remInch = inches % 12;
console.log(feet + " feet and " + remInch + " inches");


//convert feet to meter
let length = 60;  //divide length by 3.281 to convert feet to meter
let breadth = 40;

//formula for rectangle area
let area = (length*breadth);
let areas = area *0.3048;
console.log('area = '+ areas +' Meters');

//calculate for 25 plots
let totalArea = area*25;
console.log('Total Area of 25 plots = '+totalArea +' Meters' );

//formula for converting squaremeter to area
let areaInAcre = (totalArea*2.2957);
console.log('Area of 25 plots are ='+ areaInAcre +' acres');