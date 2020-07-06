const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortedBands = bands.sort((a, b) => {
  if (a.search(/^(a |an |the)/i) === 0) {
    a = removeArticle(a);
  }

  if (b.search(/^(a |an |the )/i) === 0) {
    b = removeArticle(b);
  }

  return a < b ? -1 : 1;
});

function removeArticle(band) {
  let i = 0;
  while (band[i] !== " ") {
    i++;
  }

  return band.substr(i + 1, band.length - 1);
}

// wes solution:
function strip(band) {
  return band.replace(/^(a |an |the )/i, "");
}

const wesSort = bands.sort((a, b) => {
  return strip(a) > strip(b) ? 1 : -1;
});
//

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => {
    return `<li>${band}</li>`;
  })
  .join("");
