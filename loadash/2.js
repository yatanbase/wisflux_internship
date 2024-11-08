const _ = require('lodash')

const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51},
]

//make everyone's lastname to UPPPERCASE

const updatedMembers = _.map(members,({name,...rest})=>{
    let [firstName,lastName] = _.split(name,' ');
   const updatedName = `${firstName} ${_.toUpper(lastName)}`;
   return { name:updatedName,...rest};
    
})

console.log(updatedMembers)