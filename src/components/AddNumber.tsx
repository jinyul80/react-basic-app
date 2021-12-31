import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { increment, decrement } from '../reducers/counter';

const AddNumber = (props: any) => {
  const [num, setNum] = useState('1');
  return (
    <Container className="redux-child">
      <h1>Add Number</h1>
      <Row className="align-items-center">
        <Col xs={2}>
          <Button variant="primary" onClick={() => props.increment(num)}>
            +
          </Button>
          <Button variant="info" onClick={() => props.decrement(num)}>
            -
          </Button>
        </Col>
        <Col xs={10}>
          <Form.Control
            type="text"
            size="lg"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          ></Form.Control>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return { count: state.counter.count };
};

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(AddNumber);
