//object ko declare karne ke do tarike hai eak literal ki trah aur eak constructer ki trah aur eak literal ki trah
//singleton: singleton ka matlab hota hai koi bhi constructer se banante hai singleton eak object banata hai yaani ki ye apni trah ka eak hi object hai
//jab bhi hum actually main literals ki trah declare karte  hai wah singleton nahi hota ya nahi banta agar wahi constructor se banate hai to hamesa singleton banega
//object literals : yah object ko declare karne ka tarika hai
//const jsUser={}
// console.log(jsUser)
//object ko object.create karke bana sakte hai yaha jo tarika h n object.create isi ko bole hai constructer method ke through aur isi ke andar singleton banta hai
const jsUser={
    name:"saurabh",
    age:18,
    location:"Delhi",
    email:"saurabh@123",
    isLoggedIn:false,
    lastLoginDays:["monday" , "saturday"],
    

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]); //humne yaha par dot operation ka use karke access kiya

//   const mySym=Symbol("key1"),
//  "full name":"saurabh singh",
 //isme . operation ka use nahi kar sakte
// console.log(jsUser["full name"]);

//const mySym=Symbol("key1")
//* ye kitni baar puchha jata hai eak symbol lo object ke liye object ke key main add karke dekhoaur usko print kara do
  // "mySym":"mykey1",
// jo ko yah abhi galat hai yah string data types batayega
   //[mySym]:"mykey"
}
//    console.log(typeofjsUser.mySym),
//    console.log(jsUser[mySym]);

//ab value ko chamge karte hai

// jsUser.email="saurabh@596"
// Object.freeze(jsUser) //yah freeze kar deta hai object ko
// jsUser.email="saurabh@microsoft.com"
// console.log(jsUser);
//ab eak function add karte hai
//java script ke andarfunction ko eak citizen type se treat kiya jata hai jiska matlab yah hai aapko function koidiscrimation nahi hota aap usko variable ki trah treat kijiye koi different nahi hoga
 jsUser.greeting=function(){
     console.log("hello js user")
}
 console.log(jsUser.greeting()); 
//jab eak method ko refer kar rahe hai to undefined output aata hai
//isse yah pata chalta haifunction execute nahi huaa bus uska reference aaya hai

jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
    //is function main jo bhi name object ke andar hota hai usko refrence karne ke liye us name ke reference sabse pahle string backtrick uske karke us name ko ya same object ko ref karna hai to use this se define karte hai

}
console.log(jsUser.greetingTwo)
console.log(jsUser.greetingTwo())

//jab aap value ko access karte hai jada tar .se kafrenge but kabhi kabhi aise case samne aatw hai jise aap .se nahi kar sakte to app use [] se access kar sakte hai




