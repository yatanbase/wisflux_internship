const _ = require('lodash');

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Rakesh Shrivastava', age: 41},
    {name: 'Chandraprakash Sharma', age: 17},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhwan', age: 51},
];

// Use Lodash's `_.maxBy` to find the member with the maximum age
const oldestMember = _.maxBy(members, 'age');

// Get the age of the oldest member
const max_age = oldestMember.age;

console.log(max_age);
