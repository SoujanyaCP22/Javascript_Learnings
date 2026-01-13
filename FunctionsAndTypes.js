/*syntax 
function name(parameter1 , parameter2, parameter3){

}*/

//Not returning any value
function add(a,b)
{
    console.log(a+b);
}
add(100, 200);

//Returning the value
function addValue(a,b){
    return(a*b);
}

let res = addValue(10,20);
console.log(res);

//No agruments
function greeting(){
    console.log("Hey GM");
}
greeting();

//No agrument but return somevalues
function greetings(){
    return("Good Morning")
}
let msg = greetings();
console.log(msg);
 