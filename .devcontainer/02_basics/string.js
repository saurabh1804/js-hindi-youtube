// // const name="hitesh"
// // const repoCount=50
// // // console.log(name+repoCount+"value") ye syntax bilkul sahi nahi hai model time main aisa koi nahi use karta
// // console.log(`hello my name is ${name} and my repoCount is ${repoCount}`)
// // //yah eak moderen syntax hai ise string interpolution bola jata hai
// // //eak aur tarika se string declare kar sakte hai
// const gameName=new String('saurabhhc')
// console.log(gameName[4]) //0 key value pair hai
// console.log(gameName[0])
// console.log(gameName. __proto__) //
// console.log(gameName.toUpperCase());//in method ko bhi isi trah se access kar sakte hai
// //but isme string ka original value change nahi hogi
// console.log(gameName.indexOf('h')); //agar mujhe yah pata karna hai t kis position par hai
// const newString=gameName.substring(0,4)
// console.log(newString) //isko substring main devide karte hai
//isme hum yah dekhte hai jo last wala index hai wo add nahi hota
//const anotherString=gameName.slice(-8,4);
//console.log(anotherString);// yah concept slice ke andar hota hai
//slice ke andar negative value le sakte hai
//jab ki substring ke andar negative value nahi le sakte hai agar koi value de raha hai wo ignore karke 0 se start kar raha hai
//string ke andar eak method use karte hai triam aur replace
//trim aapka starting space aur end space ko remove kar deta hai
const newStringOne="   hitesh    "
console.log(newStringOne);
console.timeLog(newStringOne.trim());
const url="https://saurabh.com/saurabh%20singh"
console.log(url.replace('%20','-'))
//main isko replace karne ke saath question be puchh bhi sakte hai
console.log(url.includes('hitesh'))
//agr hitesh ki jagh saurabh ho to true ho sakta hai
const gameName=new String("saurabh-sc")
console.log(gameName.split('-'));