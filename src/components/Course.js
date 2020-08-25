import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Course = (props) => {
  const { course } = props; // assigning to the variable to make it readable
  const parts = course.parts;
  const total = parts.reduce(function (total, part) {
    return total + part.exercises;
  }, 0);
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Footer total={total} />
    </div>
  );
};

export default Course;
