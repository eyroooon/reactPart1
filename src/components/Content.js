import React from 'react';
import Parts from './Parts';

const Content = (props) => {
  const { parts } = props; // assigning the props to make it more readable

  console.log(parts);

  return <Parts parts={parts} />;
};

export default Content;
