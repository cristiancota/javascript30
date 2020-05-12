const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const inventors1500 = inventors.filter((inventor) => {
  return inventor.year > 1499 && inventor.year < 1600;
});

console.log(inventors1500);

const firstAndLastNames = inventors.map((inventor) => {
  return inventor.first + " " + inventor.last;
});

console.log(firstAndLastNames);

const sortedInvetorsByBirthYear = inventors.sort((a, b) => {
  return a.year - b.year;
});

console.log(inventors);
console.log(sortedInvetorsByBirthYear);

const sumAllInventorYearsLived = inventors.reduce((current, inventor) => {
  return current + (inventor.passed - inventor.year);
}, 0);

console.log(sumAllInventorYearsLived);

const inventorsSortedByYearsLived = inventors
  .map((inventor) => {
    inventor.yearsLived = inventor.passed - inventor.year;
    return inventor;
  })
  .sort((a, b) => a.yearsLived - b.yearsLived);

console.log(inventorsSortedByYearsLived);

const inventorsSortedByYearsLived2 = inventors.sort((a, b) => {
  return a.passed - a.year - (b.passed - b.year);
});

console.log(inventorsSortedByYearsLived2);

// from https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const links = Array.from(document.querySelectorAll(".mw-category a")).map((link) => link.textContent);
// const links = [...document.querySelectorAll(".mw-category a")].map((link) => link.textContent);

const links = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

// const blvdsContainingDe = links.filter((link) => link.indexOf('de') != -1);
const blvdsContainingDe = links.filter((link) => link.includes("de"));
console.log(blvdsContainingDe);

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

const peopleSortedAlpha = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");
  return aLast - bLast;
});

console.log(peopleSortedAlpha);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportCount = data.reduce((result, currentTransport) => {
  if (!result[currentTransport]) {
    result[currentTransport] = 1;
  } else {
    result[currentTransport]++;
  }
  return result;
}, {});

console.table(transportCount);
