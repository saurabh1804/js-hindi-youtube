//control flow main eak time par sabhi code run nahi karte hai agar login huaa to eak time par eak code run huaa logout huaa to koi dusra part run hoga
//if
// if(true){

// }
// if(false){

// }
// if(2==2){ 
//     console.log(true);

// }
//const isUserloggedIn=true
// if(isUserloggedIn){

// }

// if(2===2){
//     console.log("executed");
// }
// if(2==="2"){
//     console.log("executed");
// }

// const temperature=41
// if(temperature<50){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");


// const temperature=40
// if(temperature===39){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50")
// }

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
// }


 const balance=1000
// if(balance>500) console.log("test1"), console.log("test2");
// eak baat hamesa yaad rakhna mera commas lagakar kaam karne se syntax sahi nahi hota hai isliye hum commas dekar nahi likhte hai

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200");
// }

// const loggedInFormEmail=true
// const loggedInFormGoogle=false
// const UserLoggedIn=true
// const debitCard=true
// if(UserLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }
// if(loggedInFormGoogle || loggedInFormEmail){
//     console.log("userLoggedIn")
// }


// //Switch
// const month=3;
// switch(key){
//     case Value:
//         break;
//         default:
//             break;
// }
//key wo value hota hai jise hume check karna hota hai

// const month=3
// switch(month){
//     case 1:
//         console.log("january");
//         break;
//         case 2:
//             console.log("February");
//             break;
//             case 3:
//                 console.log("March");
//                 break
//                 case 4:
//                     console.log("April");
//                     break;
//                     default:
//                         console.log("default case match");
//                         break;
// }

const month="march"
switch(month){
    case 1:
        console.log("januray");
        break;
        case 2:
            console.log("February");
            break;
            case 3:
                console.log("march");
                break;
                case 4:
                    console.log("April");
                    break;
                    default:
                        console.log("default case match");
                        break;
}

//trithy.js

// const userEmail=[]
// // const userEmail="@saurabh123"
// // const userEmail=""
// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("dont have user email");
// }
// const userEmail="@saurabh123"
// // const userEmail=""
// if(userEmail){
//     console.log("got user email");
// // }
// // else{
// //     console.log("dont have user email");
// // }
// const userEmail=""
// // if(userEmail){
// //     console.log("got user email");
// // }
// // else{
// //     console.log("dont have user email");
// // }

// // Falsy Value
// // False , 0 , -0 , BigInt on , "" , null , undefined , NaN 

// //Truthy
// //"0" , 'false' , " " , [] , { } , function() {} - empty function

// if(userEmail.length===0){
//     console.log("Array is empty");

//     const emptyObj={}
//     if(Object.keys(emptyObj).length===0){
//         console.log("obj is empty");
//     }
// }


//nullish coalesciung operators(??):null undefined

// let val1;
// val1=5??10
// val1=null??10
// val1=undefined??5
// console.log(val1);

//terniary operator

condition?true:false
const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80");