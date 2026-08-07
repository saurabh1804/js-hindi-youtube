function one(){
    const username="saurabh"
    function two(){
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
 one()
 //jab hum nested function banate hai to jo child function hote hai wo parents ke variable ko access kar paate hai

 if(true){
    const username="saurabh"
    if(username==="saurabh"){
        const website="  youtube"
        //console.log(username + website);
    }
    //console.log(website)
 }
 //console.log(username);
 

 //++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++
 console.log(addone(5));
 function addone(num){
    return num+1
 }
 //addone(5)
 //if function has declared directly without any varible so call can do before declaration

 const addtwo=function(num){
    return num+2
 }
 console.log(addtwo(5));
 //if function has declared with variable so calling is not allowed before declaration


