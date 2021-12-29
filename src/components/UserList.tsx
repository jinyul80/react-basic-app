import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { UserType } from '../pages/User';

interface UserProps {
  users: UserType[];
}

const UserList = ({ users }: UserProps) => {
  return (
    <Container>
      <Row xs={1} md={2} xl={3} className="g-2">
        {users.map((user) => {
          return (
            <Col key={user.id}>
              <Card bg="light" text="dark">
                <Card.Header>{user.name}</Card.Header>
                <Card.Body className="p-2">
                  <Card.Title>{user.username}</Card.Title>
                  <Card.Text>
                    email: {user.email} <br />
                    phone: {user.phone} <br />
                    website: {user.website}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default UserList;
