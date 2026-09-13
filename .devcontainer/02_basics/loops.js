for(let i=0;i<10;i++)
{
    const element=i;
    //console.log(element);
}
//console.log(element) // it is apsultly wrong

for(let i=0;i<10;i++)
{
    const element=i;
    if(element==5){
        //console.log("5 is the best number");
    }
    //console.log(element);
}

for(let i=0;i<10;i++){
    console.log(`outer loop value:${i}`);
    for(let j=0;j<10;j++){
    //     console.log(`inner loop value:${j} and inner loop value:${i}`);
    //     console.log(i + "*" + j + "=" + i*j);
     }
}


let myArray=["Flash" , "batman" , "Superman"]
// console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
   const element=myArray[i];
//    console.log(element);
}


//Break
// for(let index=1;index<=20;index++){
//     if(index==5){
//         console.log(`detected 5`)
//         break;
//     }
//     console.log(`value of i is $ {index}`);
// }

//continue

for(let index=1;index<=20;index++)
{
    if(index==5){
        console.log(`detected 5`)
        continue;
    }
    console.log(`value of i is${index}`);
}