// Keyword function
//1.Named functions
function sum(a,b){
    console.log(a+b);
}
// calling the function
sum(21,29);

// 2.Anonymous Function
var sum = function(a,b){
    console.log(a+b);
};
sum(5,9);

// 3.Arrow function
var sum = (a,b) => {
    console.log(a+b)
}
// var sum = (a,b) => console.log(a+b)



var flipkart = [
    {    price: 200,
         quantity: 2
    },
    {
        price: 900,
        quantity: 1
    },
    {    price: 600,
         quantity: 2
    },
    {
       price: 700,
       quantity: 9
    },
    {    price: 300,
        quantity: 2
    },
    {
       price: 800,
       quantity: 5
    },
];



// PROMISES
// It is an object that returns a value that we hope to recive in the futurre but not immediately
// eg: yt plauylist
// 1. pending state
// 2. fulfill ((playing))
// 3. reject (unable to play
var myPromise = new Promise(function(resolve,reject) {
    resolve("Success");
     reject("Error occured");
});

myPromise
.then((data)=>{console.log(data)})
.catch((err)=> {console.log(err)});

console.log("This is the last");

