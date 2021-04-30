const students = [
    {id: 21, name: 'Sakib'},
    {id: 31, name: 'Mahafuj'},
    {id: 41, name: 'Ratan'},
    {id: 51, name: 'Hamid'},
];

const names = students.map ( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter ( s => s.id> 40);
const biggerOne = students.find ( s => s.id> 40);
console.log(biggerOne);