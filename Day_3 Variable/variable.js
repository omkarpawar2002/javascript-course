// Variable 
/*
        Variable is a container which used to store or hold a value.
*/

let name = "Joe";
console.log(name);

// ==========================================================================


// Declaring Variable
/*
    There are 3 ways we can declare a variable :
        1.let
        2.var
        3.const

    Example : let age = 35;
    Note : So here let , var or const this keyword is used to declare a variable because it tells the program that we are going to create a varible age which contain the value 35
*/

let age = 35;
console.log(age);

var city = "Mumbai";
console.log(city);

const pi = 3.14;
console.log(pi);

// ==========================================================================


// Variable Naming Rules
/*
    1.Variable name should start with letter,underscore or dollar.
    2.Variable name can contain alphanumeric characters.
    3.Among all the special characters only underscore and dollar is allowed.
    4.Variable name are case sensitive.
    5.Reserved keywords can not be used as a variable name.
*/

// ==========================================================================


// Assigning values 
/*
    Here = is an assignment operator which is used to assign the right hand side value to the left hand side of variable.

    Example : let age = 34;
*/

let isAvailable = true;  // Directly initialize the values at the time of declaration

let result;     // First declare a variable and the later assign the values.
result = false;  

// ==========================================================================


// Reassignment

// Let keyword : 
/* 
    Here we see about let keyword : 
        we create a variable first_name and initialize it with a value but yes later we can reassign the new value to the first_name variable.

        1.let having a block scope.
        2.create a variable using a let keyword is a modern or recommended way.
        3.let was introduced in new version of javascript in 2015.
*/

let first_name = "marrie";
console.log(first_name);
first_name = "nicolas";
console.log(first_name);


// Var Keyword :
/* 
    Here we see about var keyword : 
        we create a variable country and initialize it with a value but yes later we can reassign the new value to the country variable.

        1.var having a function scope.
        2.create a variable using a var keyword is a old way.
*/

var country = "India";
console.log(country);
country = "Russia";
console.log(country);


// Const keyword :
/* 
    Here we see about const keyword : 
        we create a variable price and initialize it with a value but no later we can not reassign the new value to the price variable.

        1.const having a block scope.
        2.create a variable using a const keyword only when value will never change throught the program.
        3.const was introduced in new version of javascript in 2015.
*/

const price = 34.99;
console.log(price);
// price = 45.32;
// console.log(price);

// ==========================================================================


// Redeclared

// Let Keyword :
/*
    If we declare a variable by using let keyword so we can not redeclared it.
*/

let last_name = "root";
console.log(last_name);
// let last_name = "pooran";
// console.log(last_name);


// Var Keyword :
/*
    If we declared a variable using var keyword so we can easily redeclare it.
*/

var isLogin = true;
console.log(isLogin);
var isLogin = false;
console.log(isLogin);


// Const Keyword :
/*
    1.If we declared a variable using const keyword so we can not redeclared or reassign it.
    2.One more thing about const keyword is when we declare a variable so at the time of declaration we need to initialize it.
*/

const emp_id = 101;
console.log(emp_id);

/*
const updated_id;   // Here we see error 
updated_id = 201;
console.log(updated_id);
*/

// ==========================================================================

/*
    Scope : 
        Scope is the region or are where we access the variable.
        1.Global Scope
        2.Local Scope 

    Global Scope :
        variables declared outside any function are accessible everywhere.

    Local Scope :
        The variable which are declare in block having local scope.
*/

let rollNo = 101;   // Global Scope
console.log(rollNo);
{
    console.log(rollNo);
}
console.log(rollNo);


{
    let employee_id = 200; // Local Scope
    console.log(employee_id);
}
// console.log(employee_id);  // Now here we get an reference Error


// ==========================================================================


// Difference between let and var

/*
1.let :- 
        a.let is a new way to declare a variable in javascript.
        b.let is a block scope variable so the variable does not accessable outside the block.

2.var :- 
        a.var is a older way to declare a variable in javascript.
        b.var is a function scope it can be accessable through anywhere in function.
*/

// ==========================================================================

