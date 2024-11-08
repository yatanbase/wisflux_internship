// Last Name in UPPERCASE

const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51},
]



const updatedMembers = members.map((e)=>{
    let [firstname,lastname] = e.name.split(' ');                                   //get name and last name from each member
    return (
        {
            ...e,name:`${firstname} ${lastname.toUpperCase()}`                       //return string after updation (lastname to uppercase)
        }
    )
})

console.log(updatedMembers)