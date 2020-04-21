var nameVar = 'Justin';
var nameVar = 'Kenneth';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Justin Spegele';
let firstName
if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);