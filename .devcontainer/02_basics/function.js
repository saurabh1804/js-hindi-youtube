// function sayMyName(){     //ye hai function ka defination
//     // console.log("s");
//     // console.log("a");
//     // console.log("u");
//     // console.log("r");
//     // console.log("a");
//     // console.log("b");
//     // console.log("h");
//     // console.log(sayMyName());       //ye hai reference
// }
// //function ka matlab hota hai jo bhi apne code likha hai 10 line 20 line ka or 5 line ka usko eak package mainband kar diya hai wo package ko aap jitni baar jaha chahe copy le jaa sakte hai
// // function addTwoNumber(number1,number2){
// //     console.log(number1+number2);
// // }
// // addTwoNumber(3,4);   //ise argunment bolte hai
// // addTwoNumber(3,"4");
// // addTwoNumber(3,null);
// // const result=addTwoNumber(3,5)
// // console.log("result:",result);

// function addTwoNumbers(number1 , number2){
//     let result=number1+number2
//     return result
// }
// const result=addTwoNumbers(3,5)
// // console.log("result:",result);

// //agar function ko defination ko andar apne eak baar kisi chijh return kar diya aur uske baad kuchh likhenge to wah kaam nahi karega
// function addTwoNumbers(number1 , number2){
//     return number1 + number2
// }

// const result=addTwoNumbers(3,5)
// console.log("results",result);


// function loginUserMessage(username)
// {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("saurabh"));
// function loginUserMessage(username)
// {
//     if(username===undefined)
//     {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage())



// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,500));
//bahut sare value pass kar raha hu but output main eak hi value aa raha hai but hume sare value chahiye uske liye main rest operator ka use karte hai
//function calculateCartPrice(...num1){
  //  return num1
//}
//console.log(calculateCartPrice(200,400,500))
//rest operator ka simple matlab yah hota hai jo chijh aapke paas khudre main that means alag hai usko same list ya same group ya same packet main pack karna

//function calculateCartPrice(val1,val2, ...num1){
  //  return num1
//}
//console.log(calculateCartPrice(200,400,500,20000));

const user={
    username:"saurabh",
    price:199
}
function handleObject(anyObject){
    console.log(`user name is{anyObject.username} and price is{anyObject.price}`);
}
//handleObject(user)

handleObject({
    username:"sam",
    price:399
})
//console.log(handleObject());
//handleObject(user.username)

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));