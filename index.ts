#!/usr/bin/env node

import inquirer from "inquirer";
let  myBalance = 50000; //Dollar

console.log("wellcome to Askari Bank")

let myPin = 23452;
let pinAnswer =  await  inquirer. prompt(
    [
        {name: " pin",
         type:  "number",
         message: "Enter your pin",

        }
    ]
);
//console.log(mypinAnswer);
 if(pinAnswer === myPin){
console.log(`correct pin code !!!`)
 }
 let operationAnswer = await inquirer.prompt(
    [
        { name:  "operation",
          type:   'list',
          message:  'please select the option',
          choices: ["checkbalance", 'withdraw' , 'insufficantionbalance' , 'fastcash']


        }
    ]
 )   
    console.log(operationAnswer);
      
 if(operationAnswer.operation === 'withdraw '){
    let amountAns =await inquirer.prompt(
    [
       { name:   'amount',
         type:   "number",
         message:  "Enter your amount",

       } 
    ]    
    )
    
     myBalance  -= amountAns.amount;
console.log('your  balance is :'  + myBalance)
 console.log("insuficent balance")
}
else if(operationAnswer.operation === "checkbalance") {
console.log("your balance is"  + myBalance)
} 

else if(operationAnswer.operatio === "withdraw")
{
    name:   "withdraw"
    message:  "Enter your amount"
    type:      "number"
}
    
console.log (`your remaning balance is :` + myBalance)
//console.log("insufficaation  balance")    

 let fastcashAns = await inquirer.prompt([
    {
    name:       "fastcash",
    message:    "enter your amount",
    type:         "list",
    choices:    ["5000",  '10000', "15000",  '20000', '30000', '45000', "50000","55000"]
    },


 ]) 
  
 if(fastcashAns.fastcash > myBalance){
 console.log("your remanining balance is:"+ myBalance)
console.log("insufficantionbalance")
}else{
myBalance -=fastcashAns. fastcash
console.log(`${fastcashAns.fastcash}withdraw successfully`)
console.log(`your remaning balance is:${myBalance}`)
}      


     
 
