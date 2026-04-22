// Data Type 
/*
    Data Type Actually refered to which kind of value a variable holds.
*/


// Dynamic Typing
/*
    Here in javascript we no need to define the data type of variable.
    Variable value change anytime that's known as dynamic typing.
*/
let num = 34;
num = "Thiry four";
console.log(num);


// typeof operator
/*
    typeof() operator is used to check the data type of variable.
*/
let number = 34;
console.log(typeof(number));


// Primitive Data Types 
/*
    1.Primitive data types are those who are immutable and hold only single value.
    2.There are different types of primitive data types
        a.string
        b.number
        c.boolean
        d.undefined
        e.null
        f.BigInt
        g.Symbol
*/

// 1.String
/*
    1.String is a sequence of character.
    2.Anything which kept together inside single,double quotes are treated as a string in javascript.
    3.This data types is used when we want to store textual data like name , location etc.
*/
let firstName = "Michal";
console.log(firstName,typeof(firstName));


// 2.Number
/*
    1.Number can store integer value or float value.
    2.This data type used when we want to store value for price , marks , rollNo etc.
*/
let marks = 78.34;
console.log(marks,typeof(marks));
let rollNo = 101;
console.log(rollNo,typeof(rollNo));


// 3.Boolean
/*
    1.Boolean data type can contain only 2 values either true or false.
    2.This data type we used to check whether product is available or user is login that time.
*/
let userOnline = false;
console.log(userOnline,typeof(userOnline));


// 4.undefined
/*
    We declare variable without initializing having type undefined.
*/
let location;
console.log(location,typeof(location));


// 5.null
/*
    1.null data type we used when we explicitely mentioned this variable is empty.
    2.But the type is object.
*/
let price = null;
console.log(price,typeof(price));


// 6.BigInt
/*
    1.BigInt data type used when we want to work with large number.
    2.Number always end with n.
*/
let bigNumber = 32464324567653457654321n;
console.log(bigNumber,typeof(bigNumber));


// 7.Symbol
/*
    symbol data type is used to create unique identifiers.
*/
let id = Symbol("id");
console.log(id,typeof(id));