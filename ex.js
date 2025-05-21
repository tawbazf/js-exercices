function Circle(radius){
    this.radius=radius;
    this.draw=function(){
console.log('draw');
    }
}
const circle=new Circle(10);
//adding new proprities
circle.location={x:1};
//==
circle['location']={x:1};
// BUT IF I HAVE SOMETHEING LIKE THIS
const propertyName='location';
circle['propertyName']={x:1};
//or const propertyName='center location';or center-location
//delete
delete circle['location'];
//enumerate
const circle = new Circle(10);
for  (let key in circle){
console.log(key,circle[key]);
}
for  (let key in circle){
    if (typeof circle[key]!=='function')
console.log(key,circle[key]);
}
//only the radius 
Object.key(circle);
// ALL THE KEYS AS AN ARRAY
const keys=Object.keys(circle);
console.log(keys);
//exist
if('radius' in circle)
    console.log('circle has a radius');