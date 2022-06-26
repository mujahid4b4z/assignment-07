alert("Press OK to Enter");

//VARIABLES
var y;
console.log(y);

var x=10;
console.log(x);

/*PRIMITIVE DATA TYPE
They are 6 primitive data types:
string
number
boolean
null
undefined
symbol()*/

//string
var a = "Mujahid"
console.log(typeof a);

var b = "25";
console.log(typeof b);

//Number
var age = 45;
console.log(typeof age);

var phoneno =7545451456144;
console.log(typeof phoneno);

//Boolean
var x = false;
console.log(typeof x);

var x = true;
console.log(typeof x);

//null
var absentes = null;
console.log(typeof absentes);

//Undefined
var statement;
console.log(typeof statement);

var sentence = undefined;
console.log(typeof sentence);

/*Symbol
var vol = symbol();
console.log(typeof vol);*/

//Coercion
var type1 = "elephant";
var type2 = "horse";
var sum = type1 + type2;
console.log(sum);

var value1 = "15";
var value2 = "21";
var sum = value1 + value2;
console.log(sum);

//String Concatenation
var msg1 = "They are ";
var numhotels = 18;
var msg2 = " Hotels in Town"
console.log(msg1 + numhotels + msg2);

//Conditional Statement
var a=10;
if(a<20){
    console.log("statement is true");
}

var a=10;
if(a>20){
    console.log("statement is true");
}
//no result

var a = 15;
if(a>15){
    console.log("Statement is false");
}
else{
    console.log("statement is true");
}
//statement is true

var votes =48;
if(votes<=50){
    console.log("Better luck next time");
}
else if(votes<=100){
    console.log("second position");
}else{
    console.log("first position");
}
//Better luck next time

//SWITCH

var subject=5;
switch(subject){
    case 1:console.log("Hindi");
    break;
    case 2:console.log("Kannada");
    break;
    case 3:console.log("Maths");
    break;
    case 4:console.log("Social");
    break;
    case 5:console.log("Science");
    break;
    case 6:console.log("Computer");
    break;
    default:
        console.log("Enter a valid number");
}
//Science

/*OPERATORS  

ARITHMETIC OPERATORS

THEY ARE 8 Arithmetic Operators
Addition(+)
Subtraction(-)
Multiplication(*)
Division(/)
Remainder of division(%)
Exponentiation(**)
Increment(++)
Decrement(--) */

//EXAMPLES of all ARITHMETIC OPERATORS

var x = 15;
var y = 10;

console.log(x+y);
//output:25
console.log(x-y);
//output:5
console.log(x*y);
//output:150
console.log(x/y);
//output:1.5
console.log(x%y);
//output:5
console.log(x**y);
//output:576650390625
console.log(++x);
//output:16
console.log(--x);
//output:15

/*Comparison Operators
Comparison Operators are of two types
1 Relational Operator
2 Equality Operator */

//Relational Operator
var x=9;
console.log(x>7)
//true
console.log(x>=9)
//true
console.log(x<9)
//false
console.log(x<=9)
//true

//Equality Operator
console.log(x===9)
//true
console.log(x!==9)
//false

/*Equality Operator are of two types
1 Strict equality (===)
2 Lose equality (==) */

//Strict equality (===)
console.log(9===9)
//output:true (EQUAL value and equal TYPE)
console.log("9"===9)
//output:false (VALUE is same but the TYPE is different)

//Ternary Operators OR Conditional Operators
var weight=30;
weight >=35 ? console.log("Eligible"):console.log("Not Eligible");
//Output: Not Eligible

/*Logical Operator are of three types
1 AND Operator(&&)
2 OR Operator(||)
3 NOT Operator(!)*/

//AND Operator(&&)
var age=49;
console.log(age>=18 && age<=45);
//Output:False

//OR Operator(||)
var a=49;
var b=60;
console.log(a>=18 || b<=45);
//Output:true (if any one condition will agree then the result will be true)

//NOT Operator(!)
var a=49;
var b=60;
console.log(a==b);
//Output: false
console.log(!(a==b));
//Output: true

/*LOOPING STATEMENTS
Loops are of 5 types
1 For
2 While
3 Do/While
4 For/In
5 For/Of */

//For LOOP
for(var i=3; i<=10; i++){
    console.log("The value is "+i);
}
//While LOOP
var i=2;
while(i<8){
    var multiply=i*2;
    i++;
    console.log(multiply);
}
//Do While LOOP
var n=10
do{
    var square =n*n;
    n--;
    console.log(square);
}while(n>2)
//For in LOOP
var emp={
    fname:"sulaiman",
    lname:"pasha",
    place:"india",
    Work:"Engineer"
}
var person;
for(person in emp){
    console.log(person);
    console.log(emp[person]);
}
//For of LOOP
var stats=["Karnataka","Karela","Goa","Tamilnadu"];
for(var names of stats){
    console.log(names);
}
