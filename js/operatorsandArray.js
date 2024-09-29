var a =10;
var b =2;
console.log(a+b);
// short hand operators
// a = a+b -> a+=b
a+=b
console.log(a);
// increment and decrement
console.log(b++);
console.log(b);
console.log(++a);
console.log(b--);
console.log(b);
console.log(--a);

// comparision operators
console.log(a == b);
a=2; b=2;
console.log(a == b);    
// == checks equality in value
a=2; b="2";
console.log(a === b);
// checks equality in value and datatype
console.log(a != b);
var isCrt = true;
console.log(!isCrt);

// if else
var age =19;
if(age>19)
{
    console.log("Eligible to Vote!!")
}
else
{
    console.log("Not eligible to vote!!")
}

// Conditional Operator // Ternary Operator
// condition ? true statement : false;

age > 18
?console.log("Eligible to Vote!!")
:console.log("Not eligible to vote!!");


// ARRAY METHODS
 var array = [1,2,3,4,5,6];
 console.log("initial array", array);

//  1. map
var newarray = array.map((data)=>(data+2));
console.log("new array", newarray);

// 2. filter
// const newarray2 = array.filter((data) => data<=3);
const newarray2 = array.filter((data) => {
    if(data>3)
        return data;
});
console.log("Filter=>",newarray2);

// 3.find
var newarray3 = array.find((data)=>data>4);
console.log("Find=>",newarray3);

// 4.reduce
totalsum = array.reduce((accumulation, currentValue)=>{
    return accumulation + currentValue;
})
console.log(totalsum);