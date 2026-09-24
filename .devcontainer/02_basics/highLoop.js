//High order array loop
//for of
// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     // console.log(arr)
// }
// //yaha iteration object ka meaning hai aapko kisi object or thing par iteration laga rahe hai nahi ki java script wala object par

// const greeting="Hello world!"
// for (const greet of greeting) {
//     // console.log(greet)
// }

// //MAP : Map unique value ke liye jana jata hai duplicate value allow nahi hoti
// //aur MAP eak sequence folllow karta hai

// const map=new Map()
// map.set('In' , "India")
// map.set('USA' , "United state of America")
// map.set('fr' , "france")
// // console.log(map);

// for (const key of map) {
//     // console.log(key)
// }

// for (const [key , value] of map) {
//     // console.log(key , ':' ,  value);
// }

// const myObject={
//     'game1' : 'NFS' , 
//     'game2' : 'Spiderman'
// }
// for (const [key , value] of myObject) {
//     console.log(key , ':' , value);
// // }
// // //Here show the error it is not iterable that means my object is not iterable

//     const myObject={
//     js: 'javaScript' , 
//     cpp: 'c++' ,
//     rb: "ruby" , 
//     swift : "swift by apple"
// }
// for (const key in myObject) {
   
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

// //object ke liye for-of loop kaam nahi karta
// //object ke liye for-in ka kaam hota hai but aisa nahi hai ki only object ke liye hota hai ye kuchh array ke liye bhi kaam karta hai

// const programming=["js" , "rb" , "py" , "java"]
// console.log(programming[key]);
// //for-in ko jab hum array par apply karte hai usme key print karte hai to array ki indexing aati aur yahi object ko print karte hai to value aati hai

// //thik waise hi for-of array par apply krte hai to sidha value aati hai

// const map=new Map()
// map.set('In' , "India");
// map.set('USA' , "America");
// map.set('fr' , "france");
// for (const key in Map) {
//   console.log(key)
    
    
// }
// //for-in map ke iteratible nahi hoga


// //# For each
 const coding=["js" , "ruby" , "java" , "python" , "cpp"]
// //coding.forEach(function name(){}) aise hi hum function declare karte hai but ye call back use karta hai so iska name nahi hoga

// coding.forEach(function(val){
//     console.log(val);
// })

// function PrintMe(item){
//     console.log(item);
// }
// coding.forEach(PrintMe)

// coding.forEach((item , index , arr)=>{
//     console.log(item , index , arr);
// })

// const myCoding=[{
//     languageName: "javaScript",
//     languageFileName: "js"
// }]

// {
//     languageName: "java"
//     languageFileName:"py"
// }

// coding.forEach((item)=>{
//     console.log(item.languageName);
//     console.log(item.languageFileName)
// })

//for each:
const value =coding.forEach((item)=>{
   console.log(item);
   return item
})
console.log(value)

//for each value return nahin karta hai

//**************************************************************************** */
//using Map & Filter in javaScript
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// // myNum.filter((num)=>num>4);
// const newNums=myNums.filter((nums)=>nums>4)
// console.log(newNums);

//Using for-Each
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=[]
// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums)








// const books=[
//     {
//         title:'Book one' , genere:'Fiction' , publish:'1981' , edition:'2004'
//     },
//      {
//         title:'Book two' , genere:'non-Fiction' , publish:'1992' , edition:'2008'
//     },
//      {
//         title:'Book three' , genere:'History' , publish:'1982' , edition:'2006'
//     },
//      {
//         title:'Book Four' , genere:'Non-Fiction' , publish:'1988' , edition:'2004'
//     },
//      {
//         title:'Book five' , genere:'Science' , publish:'2000' , edition:'2007'
//     },
//      {
//         title:'Book six' , genere:'Fiction' , publish:'2001' , edition:'2014'
//     },
// ];

// let userBooks=books.filter((bk)=>bk.genere==='history')
// console.log(userBooks)

// userBooks=books.filter((bk)=>{
//     return bk.publish>=2000
// })
// console.log(userBooks);

// userBooks=books.filter((bk)=>{
//     return bk.publish>=2000 && bk.genere==='history'
// })
// console.log(userBooks);

 const myNumber=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumber.map((nums)=>nums+10)
// console.log(newNums);

//

//chain ka matlab hota hai do ya tin method aap eak saath use kar sakte ho aur ye hote bhi hai

const newNums=myNumber
                 .map((nums)=>nums*10)
                 .map((nums)=>nums+1)
                 .filter((nums)=>nums>=40)
                 console.log(newNums);


 //Reduce functionality

//  const myNums=[1,2,3]
//  const myTotal=myNums.reduce(function(acc,currval){
//     return acc+currval
//  },0)
//  console.log(myTotal);

// const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal);


// const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
// console.log(myTotal);


const shoppingCart=[
    {
    itemName:"Js course",
    price : 2999
    },
    {
    itemName:"Py course",
    price : 999
    },
    {
    itemName:"Mobile dev course",
    price : 5999
    },
    {
    itemName:"data Science course",
    price : 12999
    },

]
const PrigeToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(PrigeToPay);