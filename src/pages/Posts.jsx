import React from 'react';
import PostCard from '../components/PostCard/PostCard'; // Asegúrate de que la ruta de importación sea correcta

export default function Posts() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.`;

  const posts = [
    { avatarUrl: "/LennyFavIcon.jpeg", title: "Ejemplo de título del blog", text: text },
    { avatarUrl: "/LennyFavIcon.jpeg", title: "Ejemplo de título del blog", text: text },
    { avatarUrl: "/LennyFavIcon.jpeg", title: "Ejemplo de título del blog", text: text },
    { avatarUrl: "/LennyFavIcon.jpeg", title: "Ejemplo de título del blog", text: text },
  ];

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <PostCard 
          key={index}
          avatarUrl={post.avatarUrl} 
          title={post.title} 
          text={post.text} 
          avatarClass="w-24 h-24"
          titleClass="font-bold text-2xl"
          textClass="mt-2"
        />
      ))}
    </div>
  );
}