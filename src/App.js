import React, { useState } from 'react';
import Name from './components/Name';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import servicePerson from './services/notes';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
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
      persons.find(
        (person) => person.name === newName && person.number === newNumber
      ) !== undefined; // to find if new name exist on the object

    //Conditional statement for adding the name
    if (isExist) {
      alert(`${newName} already exist in phonebook`);
    } else {
      event.preventDefault();
      const nameObject = {
        name: newName,
        number: newNumber,
      };
      servicePerson.create(nameObject).then((returnedName) => {
        setPersons(persons.concat(returnedName));
        setShowAll(showAll.concat(returnedName));
        setNewName('');
        setNewNumber('');
      });
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
    console.log(showAll);
  };

  //functio for deleting contact
  const deleteContact = (id) => {
    const person = persons.find((person) => (person.id = id));
    const result = window.confirm(
      `are you sure you want to delete ${person.name} contact info?`
    );
    if (result) {
      servicePerson.remove(id).then((returnedNames) => {
        setPersons(returnedNames);
        setShowAll(returnedNames);
      });
    }
  };

  //rendered output
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filteredPerson={filteredPerson} />
      <h2>Add New</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Name deleteContact={deleteContact} persons={showAll} />
    </div>
  );
};

export default App;
