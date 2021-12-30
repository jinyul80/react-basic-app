import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { UserType } from './User';

export interface PostType {
  id: number;
  userId: number;
  userName: string;
  title: string;
  body: string;
}

const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const GetPosts = async () => {
    const userList: UserType[] = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((responese) => responese.data);

    const responese = await axios.get('https://jsonplaceholder.typicode.com/posts');
    let data = responese.data;
    const userIdList: any[] = Array.from(new Set(data.map((v: PostType) => v.userId)));

    for (const id of userIdList) {
      const username = userList.find((user) => user.id === id)?.name;

      data = data.map((post: PostType) => {
        if (post.userId === id) {
          post.userName = username as string;
          return post;
        } else {
          return post;
        }
      });
    }

    setPosts(data);
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <div>
      <h1>Post</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Post;
