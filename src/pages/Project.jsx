import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/Project/ProjectDetails";
import { getAllByTitle } from "../api/getProjectByTitle";

const Project = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);
  const titleWithSpaces = title.replaceAll("_", " ");
  useEffect(() => {
    (async () => {
      const response = await getAllByTitle(titleWithSpaces);
      console.log(response);
      if (response.success) {
        setProject(response.data);
      }
    })();
  }, [title]);

  return <div>{project && <ProjectDetails project={project} />}</div>;
};

export default Project;
