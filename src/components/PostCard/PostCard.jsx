/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <Link className="flex rounded-xl py-4 px-8 bg-zinc-300 text-black dark:text-white dark:bg-zinc-800">
      <div className="flex flex-col gap-4 items-center">
        <img
          src={post.authorAvatar}
          alt={`${post.authorUsername} avatar`}
          className="h-44 w-44 rounded-full object-cover border-2 border-black dark:border-zinc-400"
        />
        <span>{post.authorUsername}</span>
      </div>
      <div className="p-4 flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <span className="text-zinc-500 p-2">{post.createdAt}</span>
        </div>
        <p>{post.content}</p>
      </div>
    </Link>
  );
};

export default PostCard;
