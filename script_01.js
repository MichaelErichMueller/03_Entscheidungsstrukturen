"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
// const ageJohn = 31;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

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

// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

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


// const firstName = "Jane";
// let job;



// job = "driver";     // .. fährt TAXI! / UBER
// job = "diver";      // .. taucht im Rhein!
// job = "artist";     // .. malt ein Bild!
// job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!


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
//         console.log(firstName + " unterrichtet!");
//         break;
//     default:
//         console.log(firstName + " macht etwas anderes!");

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
}