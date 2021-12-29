import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { PostType } from '../pages/Post';

interface PostProps {
  posts: PostType[];
}

const PostList = ({ posts }: PostProps) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.userName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostList;
