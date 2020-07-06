const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const suggestions = document.querySelector(".suggestions");
const searchInput = document.querySelector(".search");

fetch(endpoint).then((blob) => {
  blob.json().then((response) => {
    cities.push(...response);
  });
});

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  let html = "";
  if (this.value.length > 0) {
    const matches = findMatches(this.value, cities);
    if (matches.length > 0) {
      html = matches
        .map((place) => {
          const regex = new RegExp(this.value, "gi");
          const cityName = place.city.replace(
            regex,
            `<span class="match">${this.value}</span>`
          );
          const stateName = place.state.replace(
            regex,
            `<span class="match">${this.value}</span>`
          );

          return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span>
            </li>
      `;
        })
        .join("");

      suggestions.classList.add("suggestion-results");
    } else {
      suggestions.classList.remove("suggestion-results");
      html = "No results 😥";
    }
  } else {
    suggestions.classList.remove("suggestion-results");
    html = "Filter for a city or a state";
  }
  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
