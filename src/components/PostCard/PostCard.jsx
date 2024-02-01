import React from 'react';

const BlogPost = ({ avatarUrl, title, text }) => {
  return (
    <div className="flex items-start space-x-4 m-5 p-3 bg-gradient-to-t from-sky-800 to-indigo-900 dark:from-orange-900 dark:to-rose-900  rounded-lg">
      <img className="w-24 h-24 rounded-full" src={avatarUrl} alt="Avatar" />
      <div>
        <h2 className="text-2xl font-bold text-gray-400 dark:text-black">{title}</h2>
        <p className="mt-2 text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default BlogPost;