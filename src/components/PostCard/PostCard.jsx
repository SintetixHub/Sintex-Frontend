import { useEffect, useState } from 'react';
import { getAllPosts } from '../../api/getPosts';

const BlogPosts = () => {
  const [BlogPost, setPosts] = useState([]);

  useEffect(() => {
    ( async () => {
      const data = await getAllPosts();
      setPosts(data);
    } ) ();

  }, []);

  return (
    <div>
      {PostCard.map((post) => (
        <BlogPost key={post.id} avatarUrl={post.avatarUrl} title={post.title} text={post.text} />
      ))}
    </div>
  );
};

export default BlogPosts;