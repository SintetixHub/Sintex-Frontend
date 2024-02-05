import React, { useState, useEffect } from 'react';
import CardProject from '../components/CardProject/CardProject';
import { getAllProjects } from '../api/getProjects';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProjects();
      if (response && response.success) {
        setProjects(response.data);
      }
    })();
  }, []);

  return (
    <div className="space-y-4 ">
      {projects.map((project) => (
        <CardProject key={project._id} project={project} />
      ))}
    </div>
  );
}