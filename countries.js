const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displyCountries(data))
}

loadCountries();

const displyCountries = counties => {
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        const div = document.createElement('div')

        div.classList.add('country')
        div.innerHTML = `
        <h2>${country.name}</h2>
        <P>Capital:${country.capital}</p>
        <button class"details-color" onclick="showDetails('${country.name}')">Details</button>`;
        countriesDiv.appendChild(div);
    });
}
const showDetails = name => {
    console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}
const displayCountryDetails = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <h4>Population: ${country.population}</h4>
        <img width="200px" src="${country.flag}">`
}