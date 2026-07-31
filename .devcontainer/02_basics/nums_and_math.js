// const score=400
// console.log(score)
// const balance=new Number(100)
// console.log(balance)
// //agar main iska output dekhunga to only 100 hi aayega
// //agar main iska output dekhunga to yah batayega balance eak number hai jo ki 100 h
// console.log(balance.toString().length)
// //output abhi bi 100 hi aayega but iska type change ho gya hai number nahi hai string h isme main chahu to length bhi use kar sakta hu 
// console.log(balance.toFixed(2)) //isme toFixed() function ka kaam value ko fix karna hota hai
// const otherNumber=123.8966
// console.log(otherNumber.toPrecision(3));
//yaha precision ka matlab hai accurate aur approx value dena
// const hundreds=1000000 // is value ko read karne main thodi problem hogi
// console.log(hundreds.toLocaleString('en-In'));
//iska use karke indian style number commas ke through seprate kar dete hai
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//ab hum baat karenge math ke baarenmain
// console.log(Math) // yah apne aap main eak object hota hai jiske andar bahut sari property hoti hai
// console.log(Math.abs(-4))
// //abs eak absolute value hota hai kai baar aisi solution aayegi jaha aapke paas negative value hoga
// //only only sign change hota hai aisa nahi ki + ka - kar de yah only - ka + karta hai
// console.log(Math.round(4.3)) //round ka matlab hota roundof karke valye batana 4 ya 5
//jaise hum dekhte hai ki .5 aa jaaye to roundof main 6 le lete hai
//agar hume yah dekhna hai ki value upper wali choose hogi ya lower wali
// console.log(Math.ceil(4.2)) //ceil ka matlab top ka value hota hai matlab 5
// console.log(Math.floor(4.9)) //floor ka matlab hota down value
// console.log(Math.min(4,3,6,8));
// //is fin ka use karne se array ke min value nikalti hai
// console.log(Math.max(4,3,6,9));
// console.log(Math.random()) // iska sabse jada use hota hai
// //iska value 0 and 1 ke bich very karta hai
// console.log((Math.random()*10)+1)
// console.log((Math.floor(Math.random()*10)+1));
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))