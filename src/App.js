import React, { useState } from 'react';
import CountryName from './components/CountryName';

const App = (props) => {
  const { countries } = props;
  const [showCountries, setShowCountries] = useState(countries);

  const handleCountryChange = (event) => {
    console.log(event.target.value);
    const newCountries = countries.filter(
      (country) => country.name.toLowerCase().indexOf(event.target.value) >= 0 // checking if country name have event.targetv.value as a substring && toLowerCase function is for case sensitivity of the serach
    );
    setShowCountries(newCountries);
  };

  return (
    <div>
      find countries: <input onChange={handleCountryChange} />
      <CountryName countries={showCountries} />
    </div>
  );
};

export default App;
