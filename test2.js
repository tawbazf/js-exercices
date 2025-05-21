let x=10;
let y=x;
x=20;

let x1={value:10};
let y1=x;
x1.value=20;
/**
 * primitives are copied by their value
 * objects are copied by their refrence
 */
let number=10;
function increase(number){
number++;
}
increase(number);
console.log(number);
//10
let obj={value:10};
function increasez(obj){
    obj.value++;
}
increasez(obj);
console.log(obj);
//11
