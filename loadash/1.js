const _ = require('lodash')

//data
const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51},
]


// arrays of first name 
let first_name_array = _.map(members,(e)=>{
   let first_name = _.split(e.name,' ')[0];
   return first_name;
})

console.log(first_name_array)