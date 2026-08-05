// //SCOPE OF FUNCTION
// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);
//jab hamara kaam var se ho raha tha to let and const ki need kyu hi pari wo isliye pari ki var jo hota hai block scope ki trah kaam nahi karta
//{}- isi ko scope bolte hai
let a=300
if(true)
{
  let a=10
  const b=20
  //c=30
  console.log("INNER:",a);
}

console.log(a);
//console.log(b);
//console.log(c);


//jab aap apne browser ke andar jaate hai aur right click karke inspect open karte hai aur jo console ke andar scop hota hai wo alag hota hai
//aur jab aap code environment node ke through ex ko run karte hai to global scope alag hota hai.
 