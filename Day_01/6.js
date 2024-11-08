const members = [
    {name:'Aman Makhija', age:20},
    {name:'Himanshu Jangid', age:40},
    {name:'Rakesh Shrivastava', age:41},
    {name:'Chandraprakash Sharma', age:17},
    {name:'Kartik Dhwan', age:45},
    {name:'Hardik Dhwan', age:51}
]

let ageSort ={                              //declaring var to get users agewise
    'young': [],
    'old': [],
    'noage': []
}

members.map((e)=>{
    if(!e.age){
        ageSort.noage.push(e);          //if age is not specified
    }
    else if ( e.age<35){
        ageSort.young.push(e);          //if user is young i.e - age less than 35
    }
    else{
        ageSort.old.push(e);            //otherwise push in old user array
    }
})

console.log(ageSort)       //result