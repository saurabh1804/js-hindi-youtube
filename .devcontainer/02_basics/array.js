const myArr=[0,1,2,3,4,5]
//ye eak variable ke andae bahut sare ke sare elements hai
//yah jaruri nahi hota ki araay main same type ke elements ho differernt types ke elements bhi ho sakte hai
//java script main array resizable hote hai
//java script main array ke andar jab bhi copy operation karenge shallow copy banata ya deep copy banata hai
//console.log(myArr[0]);
//console.log(myArr[2]);
// const myHeros=["shaktiman" , "naagraj"]
// const myArr2=new Array(1,2,3,4) //yaha new key hota hai
// console.log(myHeros); //hum string types ke bhi array bhi le sakte hai
// console.log(myArr2);


//Array method
// myArr.push(6);  // [push opperation ka use karne se elements add ho jati hai]
// console.log(myArr);
// myArr.push(7);
// console.log(myArr);

// myArr.pop();
// console.log(myArr)  //[jabhi main pop operation perform karta hu jo currently last elent add huye the array main ho hat jate hai]



// myArr.unshift(9);  // unshift opperation array main array ke element main 1st position par shift karta hai
// console.log(myArr);
// myArr.shift();  //shift opperation ka kaam hota hai ki array main unshiftoperation karne jo new element starting main add huye the unhe delete kar deta hai
// console.log(myArr)
// console.log(myArr.includes(9)); //includes fun question arise karne ke liye use kiye jate hai aur iska data types hamesa boolean hi hota hai
// console.log(myArr.includes(3));

// console.log(myArr.indexOf(9));  // index of function ke through array element ke indexing ke barren main jaante hai
// console.log(myArr.indexOf(3));


// const newArr=myArr.join()
// //array main join function ka use karne se array ko bind bhi karta hai aur uske data types ko bhi change karta hai
// console.log(newArr);
// console.log(myArr);
// console.log(typeof(newArr));

// what is the use of slice and splice in java script\

console.log("A" , myArr);
console.log("B" , myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);

const myn2=myArr.splice(1,3);
console.log("C" , myArr);
console.log(myn2);
//slice main last range include nahi hoti
//splice main last range include hoti hai but ye adhura information hai splice ko lekar
//splice main jo important change yah hota hai ki wah original array ko bhi change kar deta hai
