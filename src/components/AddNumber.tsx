import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../reducers/counter';

const AddNumber = () => {
  const [num, setNum] = useState('1');
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase(Number(num)));
  };

  const onDecrease = () => {
    dispatch(decrease(Number(num)));
  };

  return (
    <Container className="redux-child">
      <h1>Add Number</h1>
      <Row className="align-items-center">
        <Col xs={2}>
          <Button variant="primary" onClick={onIncrease}>
            +
          </Button>
          <Button variant="info" onClick={onDecrease}>
            -
          </Button>
        </Col>
        <Col xs={10}>
          <Form.Control
            type="text"
            size="lg"
            value={num}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNum(e.target.value);
            }}
          ></Form.Control>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNumber;
