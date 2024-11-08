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

const fullname = _.get(members, '[0].name');
const yearsOnEarth = _.get(members, '[0].age');

console.log(fullname);  // Aman Makhija
console.log(yearsOnEarth);  // 20
