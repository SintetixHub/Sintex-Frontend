import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogPost = ({ avatarUrl, title, text }) => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-4 my-5 border-2 dark:border-zinc-600 rounded-lg p-6 hover:bg-zinc-200 dark:hover:bg-zinc-800"
    >
      <img className="w-24 h-24 rounded-full" src={avatarUrl} alt="Avatar" />
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-200">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">{text}</p>
      </div>
    </Link>
  );
};

export default BlogPost;
