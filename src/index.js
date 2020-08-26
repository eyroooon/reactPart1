import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

//getting data from database
axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
  const countries = response.data;
  console.log(countries);

  // passing the data from db as a props
  ReactDOM.render(
    <App countries={countries} />,
    document.getElementById('root')
  );
});
