import React from 'react';

const Filter = (props) => {
  return (
    <div>
      name: <input onChange={props.filteredPerson} />
    </div>
  );
};

export default Filter;
