var input = prompt ('Please enter something.');

if (input == input.toUpperCase()){
    console.log("They are shouting")
}else if(input ==input.toLocaleLowerCase()){
    console.log("They are whispering");
}else{
    console.log("They are talking to me normally");
}