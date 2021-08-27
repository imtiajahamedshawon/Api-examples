const loadCountrise = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

}
loadCountrise();
  const displayCountries = countries => {
 const countryDiv = document.getElementById('countries')
 countries.forEach(country => {
    //  console.log(country);
     const div = document.createElement('div')
     div.classList.add('country')
    div.innerHTML = `
    <h3> ${country.name}</h3>
    <p> ${country.capital}</p>
    <button onclick="loadCountryByName('${country.name}')"> Details</button>
    `;
     countryDiv.appendChild(div)
     
 });

}
  const loadCountryByName = name => {
      const url = `https://restcountries.eu/rest/v2/name/${name}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayCountryDetails(data[0]))
};

const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML= `

    <h5>${country.name}</h5>
    <p>population : ${country.population}</P>
    <img width = "200px" src = "${country.flag}">
    ` 

} 

