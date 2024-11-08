//Average age

const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51},
]
let age_sum =members.reduce((sum,e)=>{
    return sum + e.age;             //sum of ages
},0)

age_avg = age_sum/members.length ; // average 

console.log(Math.floor(age_avg)); // floor method to remove values after decimal


