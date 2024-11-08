const _ = require('lodash');

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Rakesh Shrivastava', age: 41},
    {name: 'Chandraprakash Sharma', age: 17},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhwan', age: 51},
    {name : 'kcuh bhi'}
];

// Using Lodash's `_.groupBy` to group members based on conditions
const ageSort = _.groupBy(members, (e) => {
    if (!e.age) return 'noage';        // If no age, group under 'noage'
    if (e.age < 35) return 'young';    // If age less than 35, group under 'young'
    return 'old';                      // Otherwise, group under 'old'
});

console.log(ageSort);
