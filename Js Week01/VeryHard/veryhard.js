var userInput1 =prompt('Please enter number');
var userOperator =prompt('Please pick one operator +, -, * or /');
var UserInput2 = prompt('Please enter another number');



function add(numb1, numb2){
    var total = numb1 + numb2 
    return console.log(total)
    
}

function subtract(numb1, numb2){
    var total = numb1 - numb2 
    return console.log(total)
}
function multiply(numb1, numb2){
    var total = numb1 * numb2 
    return console.log(total)
}
function divide(numb1, numb2){
    var total = numb1 / numb2 
    return console.log(total)
}

if(userOperator == '+'){
    add(parseInt(userInput1) , parseInt(UserInput2));
}else if(userOperator == '-'){
    subtract(userInput1 ,UserInput2);
}else if(userOperator == '*'){
    multiply(userInput1, UserInput2);
}else if(userOperator == '/'){
    divide(userInput1, UserInput2);
};



