const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51},
]

const new_mem = {name:'test',age:18};  //new member

members.splice(2,0,new_mem);        //at index 2 , no deletion / pushing new member data

console.log(members)  