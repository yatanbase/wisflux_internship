const _ = require('lodash');

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Rakesh Shrivastava', age: 41},
    {name: 'Chandraprakash Sharma', age: 17},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhwan', age: 51},
];

// Use Lodash's `_.sumBy` to calculate the sum of ages
const age_sum = _.sumBy(members, 'age');

// Calculate the average age
const age_avg = age_sum / members.length;

// Print the floored average age
console.log(Math.floor(age_avg));
