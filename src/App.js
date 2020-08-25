import React, { useState } from 'react';
import Name from './components/Name';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [showAll, setShowAll] = useState(persons);

  //handles the onChange event for input we always need this if we are changing value fields of a form
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addName = (event) => {
    const isExist =
      persons.find((person) => person.name === newName) !== undefined; // to find if new name exist on the object

    //Conditional statement for adding the name
    if (isExist) {
      alert(`${newName} already exist in phonebook`);
    } else {
      event.preventDefault();
      const nameObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(nameObject));
      setShowAll(showAll.concat(nameObject));
      setNewName('');
      setNewNumber('');
    }
  };

  //function for onChange event of input number
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  //function for filtering the phonebook
  const filteredPerson = (event) => {
    console.log(event.target.value);
    const newShowAll = persons.filter(
      (person) => person.name.indexOf(event.target.value) >= 0 // checking if persons name have event.targetv.value as a substring
    );
    setShowAll(newShowAll);
    console.log(showAll)
  };

  //rendered output
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filteredPerson={filteredPerson} /> 
      <h2>Add New</h2>
      <PersonForm addName = {addName} newName = {newName} handleNameChange = {handleNameChange} handleNumberChange = { handleNumberChange} newNumber = { newNumber} />
      <h2>Numbers</h2>
      <Name persons={showAll} />
    </div>
  );
};

export default App;
