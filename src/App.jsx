import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context/useUserContext";
import Navbar from "./components/Navbar/Navbar";

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

          <div className="max-w-6xl m-auto p-6">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/posts" element={<Posts />} />
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
