//members between ages 41 -60

const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51},
]

members.map((e)=>{
    if(e.age >= 41 && e.age <= 60){
        console.log(e)
    }
})

