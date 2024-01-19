/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
// Still have to work
function prece(a){
  if(a==='*' || a=='/'){
    return 2;
  }
  if(a=='+' || a=='-'){
    return 1;
  }
  if(a==='('){
    return 0;
  }
}
function toPosfix(str){
  let stack=[];
  let postfixStr="";
  let i=0;
  while(i<str.length){
    // if(str[i]=" "){
    //   i++;
    // }
    if(str[i]==='('){
      stack.push(str[i]);
    }
    else if(str[i]===')'){
      while(stack[stack.length-1]!=='('){
        if(stack[stack.length-1]!=='('){
          postfixStr=postfixStr+stack[stack.length-1]
        }
        stack.pop();
      }
      stack.pop();
    }
    else if(!isNaN(parseInt(str[i]))){
      postfixStr=postfixStr+str[i];
    }
    else{
      if(prece(stack[stack.length-1])<prece(str[i])){
        stack.push(str[i]);
      }
      else{
        while(prece(stack[stack.length-1])>=prece(str[i])){
          if(stack[stack.length-1]!=='('){
            postfixStr=postfixStr+stack[stack.length-1]
          }
          stack.pop();
        }
      }
    }
    i++;
  }
}
class Calculator {
  constructor(){
    this.result=0;
  }
  add(val){
    this.result=this.result+val;
  }
  subtract(val){
    this.result=this.result-val;
  }
  multiply(val){
    this.result=this.result*val;
  }
  divide(val){
    this.result=this.result/val;
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(exp){
    exp=toPosfix(exp);
  }
}

module.exports = Calculator;
