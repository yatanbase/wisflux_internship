const _ = require('lodash');

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Vijay Sahu', age: 41},
    {name: 'Rakesh Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhawan', age: 51}
];

// Use Lodash's _.take to extract the first two members
const [member_one, member_two] = _.take(members, 2);

console.log(member_one);
console.log(member_two);
