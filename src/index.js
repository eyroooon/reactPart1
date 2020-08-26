import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

//getting data from database
axios.get('http://localhost:3001/persons').then((response) => {
  const persons = response.data;
  console.log(persons);

  // passing the data from db as a props
  ReactDOM.render(<App persons={persons} />, document.getElementById('root'));
});

//showing error if not found
const promise2 = axios.get('http://localhost:3001/foobar');
console.log(promise2);
