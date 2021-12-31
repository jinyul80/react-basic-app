import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

const DisplayNumber = (props: any) => {
  const { counter } = props;
  return (
    <Container className="redux-child">
      <h1>Display Number</h1>
      <Form.Control type="text" value={counter.count} readOnly />
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return { counter: state.counter };
};

export default connect(mapStateToProps)(DisplayNumber);
