import React from 'react';
import { UserType } from '../pages/User';

interface UserProps {
  users: UserType[];
}

const UserList = ({ users }: UserProps) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="card mb-1" key={user.id}>
            <div className="card-body p-2">{user.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
