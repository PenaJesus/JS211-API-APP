let arrayOfCities;

window.onload = function() {
  getBreweries();
  byCity();

}
const getBreweries = () => {
  fetch('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(data => console.log(data))
}

const byCity = () => {
  fetch('https://api.openbrewerydb.org/breweries?by_city=austin')
  .then(res => res.json())
  .then(city => console.log(city))
}