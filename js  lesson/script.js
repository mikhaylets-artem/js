// url:http://code.mu/ru/javascript/book/practice/figures-calculators/

// zadacha 2
// const rectangleSmillerSide = document.querySelector('.input_1');
// const rectangleBigerSide = document.querySelector('.input_2');
// const calculateButton = document.querySelector('button');
// let square=0;
// let perimeter=0;
// calculateButton.addEventListener('click',(e)=>{
//     a = rectangleSmillerSide.value;
//     b = rectangleBigerSide.value ;
//     square=a*b;
//     perimeter=a*2+b*2;
//     console.log('s= ',square,'p= ',perimeter);
//     document.querySelector('.div_1').textContent = 's='+square+'p='+perimeter;

// })

// zadacha 3
// let square=0;
// let diameter=0;
// let circumference = 0;
// let radius =0

// let circleRadius = document.querySelector('.input_1');
// const calculateButton = document.querySelector('button');
// calculateButton.addEventListener('click',(e)=>{
//     diameter = 2*circleRadius.value ;
//     circumference = Math.PI*diameter
//     square =Math.PI*Math.pow(circleRadius.value,2) 
//     document.querySelector('.div_1').textContent='D = '+diameter;
//     document.querySelector('.div_2').textContent='C = '+circumference;
//     document.querySelector('.div_3').textContent='S = '+square;
// })


// zadacha 4
//  let sideA = document.querySelector('.input_1');
//  let sideB = document.querySelector('.input_2');
//  let sideC = document.querySelector('.input_3');
//  let p=0
//  let a =0
//  let b =0
//  let c =0
//  const calculateButton = document.querySelector('button');
//  calculateButton.addEventListener('click',(e)=>{
//      a= +sideA.value
//      b= +sideB.value
//      c= +sideC.value
//      p= a+b+c
//      console.log(typeof p)
//      document.querySelector('.div_1').textContent='p = '+p;
//  })
// вынести в функцию 

// const diameter = (radius)=>{
//     return 2*radius;
// }
// console.log(diameter());















const inputValue1 = document.querySelector('.input_1');
const inputValue2 = document.querySelector('.input_2');
const inputValue3 = document.querySelector('.input_3');

const calculateButton = document.querySelector('button');
let a=inputValue1.value
let b=inputValue2.value
let c=inputValue3.value

calculateButton.addEventListener('click',(e)=>{
let d=Math.pow(b,2)-4*a*c
let x1=-b+Math.sqrt(d)
let x2=-b-Math.sqrt(d)
console.log(x1,x2);
}) 

































