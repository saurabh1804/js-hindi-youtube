// //object ko singleton kaise kar sakte hai aur usko constructor ki help se declare kaise kar sakte hai
// //const tindleUser=new object()  //singleton
 const tindleUser={}  //nonSingleton
// // console.log(tindleUser);
// //same hi output aa raha hai empty.
 tindleUser.id="123abc"
 tindleUser.name="sammy"
 tindleUser.isLoggedIn=false
// // console.log(tindleUser);
// const regularUser={
//      email:"some@gmail.com"
//        fullname:{
//        userfullname:{
//            first_name:"saurabh"
//            last_name:"singh"
//        }
//     }
//  }
//console.log(regularUser.fullname.userfullname);
//aise main object ke andar object declare kar sakte hai
//const obj1={1: "a" , 2: "b"}
//const obj2={3: "a" , 4: "b"}
//const obj3={obj1 , obj2} //ye sahi syntax nahi hai
//const obj3=object.assign({},obj1,obj2)
//const obj3={...obj1 , ...obj2}
// console.log(obj3);



//const user1=[
//     //{
//         id:1,
//         email:"s@gmail.com"
//     },
//      {
//         id:2,
//         email:"s@gmail.com"
//     },
// ]
// console.log(users[1].email)

console.log(tindleUser);

console.log(Object.keys(tindleUser));
console.log(Object.values(tindleUser));
//sabse important baat yah hai ki jo output value milti haiuska datatypes kya hai to uska data types array hai
//to humne sare keys ko array main rakh diya ab uspar chahe to hum loop laga sakte hai
console.log(Object.entries(tindleUser))
//array ke andar array milta hai to har eak key value ko array bana deta hai jo uski first property hai wo hamesa key hoti hai aur second value
console.log(tindleUser.hasOwnProperty("isLoggedIn"));

//kitne time hum object ke andar loop through kar rahe hai agar value nahi mili to cresh hone ki chances badhte hai isliye pahle hi check kar lena chahiye
