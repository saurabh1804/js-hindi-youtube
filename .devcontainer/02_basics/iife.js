//iife is the full from of immediately invoked function expression
function chai(){
    console.log(`DB CONNECTED`);
}
chai();

(function chai(){
    console.log(`DB CONNECTED`)
})();

(function chai(){
    console.log(`DB CONNECTED 2`)
})();

(()=>{
    console.log(`DB CONNECTED TWO`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('saurabh')

//jo function immediately execute ho jaaye use iife function bolte hai
//Golbal scope ke pollution se problem hoti hai koi baar to us golbal scope ka variable hai ya jo declaration hai us pollution ko hatane ke liye iife ka use karte hai
