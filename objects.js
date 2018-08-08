var person = {
  firstName: 'Cris',
  lastName: 'Hanks'
};

function updatePerson(person, hairColor, color){
  return Object.assign({}, person, {[hairColor]: color})
}
const newPerson = updatePerson('green')
console.log(newPerson);



// function updateObjectWithKeyAndValue(obj, key, value){
//   return Object.assign({}, object, { [key]: 'value');
// };