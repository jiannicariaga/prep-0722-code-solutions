const person = {
  firstName: 'Jianni',
  lastName: 'Cariaga',
  hobby: 'Making bacon pancakes.'
};

console.log(person);

const fullName = `The person's full name is: ${person.firstName} ${person.lastName}.`;
console.log(fullName);

person.job = 'Gnome Mage (Frost)';
console.log(`The person's current job: ${person.job}.`);

person.previousJob = 'Night Elf Hunter (Beastmaster)';
console.log(`The person's previous job is: ${person.previousJob}.`);

console.log(person);
