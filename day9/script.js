const p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
}

console.log("hello");
console.log("hello I am a %s string!", "💩");
console.log("%c hello I am a %s string!", "color: blue; background:yellow;");
console.warn("This is a warn!");
console.error("Error 😵");
console.assert(1 === 2, "this is wrong");
// console.clear();
console.log(p);
console.dir(p);

const dogs = [
  { name: "hugo", age: "13" },
  { name: "firu", age: "3" },
];

dogs.forEach((dog) => {
  console.groupCollapsed(dog.name);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(dog.name);
});

console.count("cristian");
console.count("cristian");
console.count("cota");
console.count("cristian");
console.count("cota");
console.count("cota");
console.count("cota");
console.count("cristian");
console.count("cristian");

console.time("fetching user from github");
fetch("https://api.github.com/users/cristiancota")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching user from github");
    console.log(data);
  });


  console.table(dogs);