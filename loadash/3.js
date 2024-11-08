const _ = require('lodash');

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Rakesh Shrivastava', age: 41},
    {name: 'Chandraprakash Sharma', age: 17},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhwan', age: 51},
];

// Use Lodash's `_.filter` to find members between ages 41 and 60
const filteredMembers = _.filter(members, (e) => e.age >= 41 && e.age <= 60);

// Print the filtered members
console.log(filteredMembers);
