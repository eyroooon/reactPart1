import React from 'react';

const CountryName = (props) => {
  console.log(props.countries.name);
  if (props.countries.length > 10) {
    return <div>To many matches, specify another filter</div>;
  } else if (props.countries.length === 1) {
    return (
      <div>
        {props.countries.map((country, i) => (
          <div key={i}>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Language</h3>
            <ul>
              {country.languages.map((language, i) => (
                <li key={i}>{language.name}</li>
              ))}
            </ul>
            <img alt="flag" src={country.flag} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {props.countries.map((country, i) => (
          <p key={i}>{country.name}</p>
        ))}
      </div>
    );
  }
};

export default CountryName;
