"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
<<<<<<< HEAD
// const ageJohn = 31;
// const ageMark = 30;
=======
const ageJohn = 30;
const ageMark = 30;
>>>>>>> 9007cf7c1115222cc167a1e7f2e969b1c687eb91

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

<<<<<<< HEAD
// // // Ausgabe
=======
//// Ausgabe
>>>>>>> 9007cf7c1115222cc167a1e7f2e969b1c687eb91
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

<<<<<<< HEAD
/******** IF ********** */
// Tina --> There is no alternative
// entweder JA oder nix ... alternativlos
// Alt Gr und 7 = {}

// if(true)
// if(false)
// if isJohnOlder
// if (ageJohn > ageMark)
{
    // console.log("John ist Älter");
}
// *********** IF ELSE ************/
// mit Alternative
// ja oder nein

// if(true)
// if(isJohnOlder)
// {
//     console.log("John ist Älter");

// }
// else
// {
//     console.log("John ist Jünger");

=======
/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if(true)
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true)
// if (false)
// if(isJohnOlder)
// {
//     // Ja-Zweig / true
//     console.log("John ist älter.");
// } 
// else 
// {
//     // Nein-Zweig / false
//     console.log("John ist jünger."); 
>>>>>>> 9007cf7c1115222cc167a1e7f2e969b1c687eb91
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

<<<<<<< HEAD
//********** IF - ELSE IF **************
//* mit alternativen Fällen (älter,jünger,gleich alt)

// if(isJohnOlder)
// {
//     console.log("John ist Älter");

// }


// // 1. Alternative .....n
// else if(isJohnEqual)
// {
//     console.log("John ist gleich Alt");

// }

// // gemeinsame Alternative
// else
// {
//     console.log("John ist Jünger");

// }

/******** Fallunterscheidung / SWITCH CASE 1 *****/

=======
/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder)
// {
//     console.log("John ist älter.");
// } 
// // 1. Alternative  .... n
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt."); 
// }
// // evtl. weitere Alternative(n) else if(){}
// // gemeinsame Alternative
// else 
// {
//     console.log("John ist jünger."); 
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/
>>>>>>> 9007cf7c1115222cc167a1e7f2e969b1c687eb91

// const firstName = "Jane";
// let job;

<<<<<<< HEAD


=======
>>>>>>> 9007cf7c1115222cc167a1e7f2e969b1c687eb91
// job = "driver";     // .. fährt TAXI! / UBER
// job = "diver";      // .. taucht im Rhein!
// job = "artist";     // .. malt ein Bild!
// job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!

<<<<<<< HEAD

// switch (job) {
//     case "driver":
//         console.log(firstName + " fährt TAXI!");
//         break;
//     case "driver":
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "driver":
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "teacher":
//     case "instructor":
=======
// switch (job) {  // Test auf ==
//     case "driver":
//         console.log(firstName + " fährt TAXI!");
//         break;
//     case "diver":
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "artist":
//         console.log(firstName + " malt ein Bild!");
//         break;
//     case "teacher":
//     case "instructor":   
>>>>>>> 9007cf7c1115222cc167a1e7f2e969b1c687eb91
//         console.log(firstName + " unterrichtet!");
//         break;
//     default:
//         console.log(firstName + " macht etwas anderes!");
<<<<<<< HEAD

//         break;
// }

const cond = true
const a = 3;


switch (cond) {
    case (a ==1):
        console.log(" a ist gleich 1");
        break;
    case (a ==2):
        console.log(" a ist gleich 2");
        break;
    default:
        console.log(" a hat einen anderen Wert");
        break
=======
//         break;
// }

/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = false;
const a = 2;

switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
>>>>>>> 9007cf7c1115222cc167a1e7f2e969b1c687eb91
}