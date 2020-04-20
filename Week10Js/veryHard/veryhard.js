/*VERY HARD: Write a function that takes in a string and outputs the
 *first* occurrence of a character that does not repeat itself in 
 that string. Output the first character in a string that is unique.
Input: “the quick brown fox jumps over the calm kitten quietly”  
Output: “b”
Input: “this hat is the greatest!”  Output: “g”
Input: “what a wonderful day it has been!”  Output: “o”*/




// // const str = (string ) =>{
//     let word ="ana this hat is the greatest";
// for(const i=0; i < string.lenght; i++){
//   if( word.indexOf(str.charAt(i))==word.lastIndexOf(word.chartAt(i))){
//      //return string;

//   }
// }
// //}
// str();
// console.log(str);

const input = (string) => {
    for(let i = 0; i < string.length; i++){
        let a = string.charAt(i)

        if(string.indexOf(a) == string.lastIndexOf(a)){
            return a;
        }
    }
}
console.log(input('what a wonderful day it has been!'));
