import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootStateType } from '../reducers';

const DisplayNumber = () => {
  const count = useSelector((state: RootStateType) => state.counter.count);
  return (
    <Container className="redux-child">
      <h1>Display Number</h1>
      <Form.Control type="text" value={count} readOnly />
    </Container>
  );
};

export default DisplayNumber;
