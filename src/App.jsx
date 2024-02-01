import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context/useUserContext";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import PostCard  from "./components/PostCard/PostCard"; // Asegúrate de que la ruta de importación sea correcta

//Routes
import Index from "./pages/Index";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Users from "./pages/Users";
import User from "./pages/User";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import NewProject from "./pages/NewProject";
import NewPost from "./pages/NewPost";
import Emblems from "./pages/Emblems";
import Login from "./pages/Login";

export default function App() {
  return (
    <main className="dark:bg-zinc-900 dark:text-white bg-white min-h-screen">
      <BrowserRouter>
        <UserContext>
          <Navbar />
          <SearchBar />
            
          <div className="max-w-6xl m-auto ">
            <Routes>
              
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/posts" element={<Posts avatarUrl="https://example.com/avatar.jpg" title="Título del blog" text="Este es el texto del blog" />} />
              <Route path="/post/:title" element={<Post />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user/:username" element={<User />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:name" element={<Project />} />
              <Route path="/emblems" element={<Emblems />} />
              <Route path="/newProject" element={<NewProject />} />
              <Route path="/newPost" element={<NewPost />} />
              {/* Agrega tu componente Form como una ruta */}
            </Routes>
          </div>
        </UserContext>
      </BrowserRouter>
    </main>
  );
}