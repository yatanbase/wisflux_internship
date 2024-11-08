const _ = require('lodash');

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Rakesh Shrivastava', age: 41},
    {name: 'Chandraprakash Sharma', age: 17},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhwan', age: 51}
];

const new_mem = {name: 'test', age: 18};  // new member

const new_arr = _.concat(   //concatenation of arrays
  _.slice(members, 0, 2),    // sub array
  [new_mem],                 // Add the new member
  _.slice(members, 2)        // sub array
);

console.log(new_arr);
