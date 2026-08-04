//DISTRUCTERING

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructer:"saurabh"
}
// console.log(course.courseInstructer);
// console.log(course.price);
// console.log(course.coursename);

const{courseInstructer}=course
//console.log(courseInstructer);

//agar main chahu 
const{courseInstructer:instructor}=course
//console.log(instructor)


//API CONCEPT
//jab bhi aapko apna kaam ksi aur ke sar par daalna ho usi ko to API kahte hai
//API main value aati hai backend se 
//API main sabse pahle XML structure main value aati thi but ab JSON structure main aati hai
{
    "name"="saurabh"
    "coursename"="js in hindi"
    "price"="free"
} 
console.log("name");
console.log("coursename");
console.log("price");

//ye jaruri nahi hai API object ke format main hi keval milegi array ki format main bhi mil sakti hai
//kuchh is type se
// [
//     {},
//     {},
//     {},
// ]
