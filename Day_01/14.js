const members = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Himanshu Jangid', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' }, // No age
    { name: 'Kartik Dhwan', age: 45 },
    { name: 'Hardik Dhawan', age: 51 }
  ];
  
 //array to object
 const memberObject = members.reduce((acc,member)=>{
    if(member.age!==undefined){                               // if age not specified then skip the member
        acc[member.name]=member.age;                          // stores  the member name as key and age as value in the object

    }
    return acc
 },{})                           //initiate empty accumulator object
  
  console.log(memberObject);