import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Register from "./pages/Register";

export default function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <div className="max-w-6xl m-auto">
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
      </BrowserRouter>
    </main>
  );
}