// const circle={
// // properties
// radius: 1,
// location :{
//     x:1,
//     y:1
// },
// //method
// draw:function(){
//     console.log('draw');
// }
// };
// circle.draw();

//factories constructor
function createCircle(radius){
return {
radius,
draw: function(){
    console.log('draw');
}
};
}
const circle=createCircle(1);
circle.draw();

//constructor function MAJUSCULE
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
    console.log('draw');

    }
}
const another= new circle(1);
new String();// ''
new Boolean();// TRUE FALSE
new  Number (); //1 2 
// function in js are objects
Circle.call({},1) //the same as line 35
// global object window 
Circle.call(window,1) 
Circle.apply({},[1,2,3])
/*
 VALUE TYPES ;primitives :
number
string
boolean
symbol
undefined
null
 */
/*
refrence types
object 
function
array
*/
