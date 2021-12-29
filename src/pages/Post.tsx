import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';

export interface PostType {
  id: number;
  userId: number;
  userName: string;
  title: string;
  body: string;
}

const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const GetUserName = async (id: number): Promise<string> => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data.name;
  };

  const GetPosts = async () => {
    const responese = await axios.get('https://jsonplaceholder.typicode.com/posts');
    let data = responese.data;
    const userIdList: any[] = Array.from(new Set(data.map((v: PostType) => v.userId)));

    for (const id of userIdList) {
      const username = await GetUserName(parseInt(id));

      data = data.map((post: PostType) => {
        if (post.userId === id) {
          post.userName = username;
          return post;
        } else {
          return post;
        }
      });
    }

    return data;
  };

  useEffect(() => {
    GetPosts().then((v) => setPosts(v));
  }, []);

  return (
    <div>
      <h1>Post</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Post;
