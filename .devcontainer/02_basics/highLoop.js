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
// }
// //Here show the error it is not iterable that means my object is not iterable

    const myObject={
    js: 'javaScript' , 
    cpp: 'c++' ,
    rb: "ruby" , 
    swift : "swift by apple"
}
for (const key in myObject) {
   
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

//object ke liye for-of loop kaam nahi karta
//object ke liye for-in ka kaam hota hai but aisa nahi hai ki only object ke liye hota hai ye kuchh array ke liye bhi kaam karta hai

const programming=["js" , "rb" , "py" , "java"]
console.log(programming[key]);
//for-in ko jab hum array par apply karte hai usme key print karte hai to array ki indexing aati aur yahi object ko print karte hai to value aati hai

//thik waise hi for-of array par apply krte hai to sidha value aati hai

const map=new Map()
map.set('In' , "India");
map.set('USA' , "America");
map.set('fr' , "france");
for (const key in Map) {
  console.log(key)
    
    
}
//for-in map ke iteratible nahi hoga


//# For each
const coding=["js" , "ruby" , "java" , "python" , "cpp"]
//coding.forEach(function name(){}) aise hi hum function declare karte hai but ye call back use karta hai so iska name nahi hoga

coding.forEach(function(val){
    console.log(val);
})

function PrintMe(item){
    console.log(item);
}
coding.forEach(PrintMe)

coding.forEach((item , index , arr)=>{
    console.log(item , index , arr);
})

const myCoding=[{
    languageName: "javaScript",
    languageFileName: "js"
}]

{
    languageName: "java"
    languageFileName:"py"
}

coding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName)
})