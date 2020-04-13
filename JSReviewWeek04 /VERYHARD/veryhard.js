// VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute 
// the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of 
// the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  
// Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Note: You may assume that you have an infinite number of each kind of coin.
var amount = prompt('Type the number of coins you want change');
var count = 0;

function coinsDenominations(coins, value) {
    coins.sort((a, b) => a - b).reverse();
    for (var i = 0; i < coins.length; i++) {
        while (value >= coins[i]) {
            value -= coins[i];
            count++;
        }
    }
    if (value !== 0) {
        return -1;
    }
    return count;
}

console.log(coinsDenominations([1, 2, 5, 10, 25], amount));

/////////////////////////////////////////////////////////////////





//var count = 0;

// function coinsChange(array, value){
//     for (var i =0; i<array.length; i++){
//         for(a =1; a < array.length; a++){
//             if(value >=(array[i]+ array[a])){
//                 value -= array[i];
//                 return count++;
//             }else{
//                 return -1;
//             }
//         }
    
//     }
// }
// console.log(coinsChange([1, 2, 5],11));
// console.log(coinsChange([2],3));