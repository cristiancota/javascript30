// strings, numbers and booleans are value assigned
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Wes";
let name2 = name;
console.log(name, name2);
name = "wesley";
console.log(name, name2);

// arrays are reference copied
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;
console.log(players, team);
team[3] = 'Lux';
console.log(players, team);

const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

// Objects works the same as arrays
const person = {
  name: "Cristian",
  age: 27,
};

console.log(person);

const person2 = Object.assign({}, person, { number: 99, age: 35 });

console.log(person2);

// Object.assign only works 1 level deep. We need to deepcopy in order to do an exact copy from objects
const cristian = {
  name: "Cristian",
  age: 27,
  social: {
    twitter: "@crisitancotag",
    facebook: "cristian.cota",
  },
};

console.log(cristian);

const dev = Object.assign({}, cristian);

cristian.social.twitter = '@otheraccount';

console.log('cristian', cristian);
console.log('dev', dev);

// one way to deep copy
const dev2 = JSON.parse(JSON.stringify(cristian));
