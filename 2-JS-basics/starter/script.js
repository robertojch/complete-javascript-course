/*
* Variables and data types 
*/
/*
var firstName = 'Roberto';
console.log(firstName);

var lastName = 'Jacinto';
var age = 29;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variables naming rules
var _3years = 3;
var johnMark = 'Roberto SS';

*/
/*
* Variables mutation and types coercion 
*/
/*
var firstName = 'Roberto';
var lastName = 'Jacinto';
var age= 28;

//Type Coercion 
console.log(firstName + ' ' + age);

var job,isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ' . Is he married?' + isMarried);

//Variable mutation 
age = 'twenty eigth';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + ' . Is he married?' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

*/

/*
 * Basic Operators 
 */

 var now,yearJhon,yearMark;
 now = 2018;
 ageJhon = 28;
 ageMark = 33;
 //Math operators 
 yearJhon = now - 28;
 yearMark = now - 33;

 console.log(yearJhon);
 console.log(yearMark);
 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);
 console.log(now % 10);

 //logical operators 
var jhonOlder = ageJhon > ageMark;
console.log(jhonOlder);

//Typeof Operator 
console.log(typeof jhonOlder);
console.log(typeof ageJhon);
console.log(typeof 'Roberto Jacinto');
var x;
console.log(x);

/*
 * Operator precedence 
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJhon >= fullAge;
console.log(isFullAge);

//Grouping
var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageMark)/2;
console.log(average);

//Multiple assignments 
var x,y;
x = y = (3+5)* 4- 6;
console.log(x,y);

//MOre Operators
x = x *2;
console.log(x);
x *= 2;
console.log(x);
var m = 23;
m++;
console.log(m);
m--;
console.log(m);