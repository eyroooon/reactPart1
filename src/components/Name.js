import React from 'react';

const Name = (props) => {
  const { persons } = props;
  return (
    <div>
      {persons.map((person, i) => (
        <p key={i}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Name;
