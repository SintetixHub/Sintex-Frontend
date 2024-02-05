import { useState, useEffect } from "react";
import CardProject from "../components/CardProject/CardProject";
import { getAllProjects } from "../api/getProjects";
import SearchBar from "../components/SearchBar/SearchBar";
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProjects();
      console.log(response);
      if (response && response.success) {
        setProjects(response.data);
      }
    })();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-3 mt-6">
        {projects.map((project) => (
          <CardProject key={project._id} project={project} />
        ))}
      </div>
    </>
  );
}
