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

const updatedMembers = _.map(members, (member) => {
  return _.assign({ newName: member.name }, _.omit(member, 'name'));
});

console.log(updatedMembers);
