import React from 'react';
import { Container } from 'react-bootstrap';
import AddNumber from '../components/AddNumber';
import DisplayNumber from '../components/DisplayNumber';

const ReduxTest = () => {
  return (
    <Container className="redux-root">
      <AddNumber />
      <DisplayNumber />
    </Container>
  );
};

export default ReduxTest;
