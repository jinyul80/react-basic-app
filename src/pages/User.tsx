import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

const User = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((responese) => {
      console.log(responese);
      setUsers(responese.data);
    });
  }, []);

  return (
    <div>
      <h1>User</h1>
      <UserList users={users} />
    </div>
  );
};

export default User;
