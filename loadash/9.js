const _ = require('lodash');

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Rakesh Shrivastava', age: 41},
    {name: 'Chandraprakash Sharma', age: 17},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhwan', age: 51}
];

const new_mem = {name: 'test', age: 19};  // new member

//new member at index 0
const new_arr = _.concat([new_mem], members);

console.log(new_arr);
