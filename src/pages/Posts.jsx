import { useState, useEffect } from "react";
import PostCard from "../components/PostCard/PostCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { getAllPosts } from "../api/getPosts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllPosts();
      if (response.success) {
        setPosts(response.data);
      }
    })();
  }, []);

  return (
    <div className="space-y-4 ">
      <SearchBar />
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
