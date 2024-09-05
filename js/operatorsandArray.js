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