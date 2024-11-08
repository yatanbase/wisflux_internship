// array of first names out of array

const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51},
]

let first_name =[];  //empty array  to store first names


first_name = members.map((e)=>{
    return  e.name.split(' ')[0];   //spliting by gap and taking first name only
})

console.log(first_name); //log result