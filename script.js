// var number1 =prompt("enter number")

// function check(num1){
//     if(num1>0){
//         console.log("posetive number"); 
//     }else if(num1<0){
//         console.log("Negative number");
//     }else{
//         console.log("Zero")
//     }
// }
// check(number1)


// var discount=0
// var finalbill=0

// function check(num){
//     if(num<1000){
//         console.log("No discount")
//     }else if(num>=1000&&num<=4999){
//         discount=num*(10/100)
//         finalbill=num-discount
        
        
//     }else if(num>=5000&&num<=9999){
//         discount=num*(20/100)
//         finalbill=num-discount
        
        
//     }else if(num>=10000){
//         discount=num*(30/100)
//         finalbill=num-discount
       
//     }
//     console.log("Orginal price :"+num);
//         console.log("Discount :"+discount)
//         console.log("Final Bill :"+finalbill)
    
    
// }

// check(6000)




var money=10000

function checkBalance(num){
 if(num>=1000){
    console.log("Initial Balance:"+num)
 }else{
    console.log("minimum balance 1000")
 }
}
checkBalance(money)

var tamount=5000
function depositMoney(amount){
    console.log("Deposit Amount :"+amount)
  console.log("Balanace Amount :"+(money=money+amount))
}
depositMoney(tamount)
var wid=[3000,11500]
function withdrawMoney(amount){
    if((money-amount[0])>=1000){
    console.log("Withdraw Amount :"+amount[0])
    console.log("Balanace Amount :"+(money=money-amount[0]))
    }else{console.log("Riject")}


    if((money-amount[1])>=1000){
    console.log("Balanace Amount :"+(money-amount[1]))
    }else{
        console.log("Withdraw Amount :"+amount[1])
        console.log("Reject")
    }
}
withdrawMoney(wid)
console.log(money)