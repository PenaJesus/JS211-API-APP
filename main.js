let api = 'https://api.openbrewerydb.org/breweries?by_city=';
let city = 'Dallas'


fetchData = () => {
  let url = api + city;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    //logging name


    .then(data => {

      const listOfNames = data
      console.log(listOfNames)

      listOfNames.map(brewery => {
        console.log(brewery)
        // document.querySelector('#name').append(brewery.name)

        // Create a temporary <div> to load into
        var div = document.createElement('div');
        div.setAttribute('class', 'someClass');
        div.innerHTML = document.getElementById('blockOfStuff').innerHTML;

        // You could optionally even do a little bit of string templating
        div.innerHTML = div.innerHTML
          .replace(/name/g, brewery.name)
          .replace(/city/g, brewery.city)
          .replace(/street/g, brewery.street)
          .replace(/phone/g, brewery.phone)
          .replace(/state/g, brewery.state)
          .replace(/btncheck/g, brewery.id);
        // Write the <div> to the HTML container
        document.getElementById('targetElement').appendChild(div);
      })
    })




    //catching error
    .catch(error => {
      console.log(error);
    })
}

fetchData();



