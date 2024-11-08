const _ = require('lodash');

const members = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Himanshu Jangid', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' }, // No age
    { name: 'Kartik Dhwan', age: 45 },
    { name: 'Hardik Dhawan', age: 51 }
];


const memberObject = _.reduce(members, (acc, member) => {
    if (_.has(member, 'age')) { // Check if 'age' property exists using Lodash
        acc[member.name] = member.age;
    }
    return acc;
}, {});

console.log(memberObject);
