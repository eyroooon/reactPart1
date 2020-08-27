import React from 'react';

const Name = (props) => {
  const { persons } = props;
  console.log(persons);
  if (persons.length > 0) {
    return (
      <div>
        {persons.map((person, i) => (
          <p key={i}>
            {person.name} {person.number}
            <button
              key={person.name}
              onClick={() => props.deleteContact(person.id)}
            >
              delete
            </button>
          </p>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>There is no existing contact</p>
      </div>
    );
  }
};

export default Name;
