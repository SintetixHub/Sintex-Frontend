import React from 'react';
import ProjectInfo from '../components/ProjectUser/project.jsx';

const project = () => {
  const demoUsers = [
    { id: 1, name: 'Lennydev', role: 'Desarrollador' },
    { id: 2, name: 'Eban', role: 'Diseñador' },
    { id: 3, name: 'Paul', role: 'Tester' },
    { id: 4, name: 'Maria', role: 'Gerente de Proyecto' },
    { id: 5, name: 'Juan', role: 'Analista' },
  ];

  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
      <ProjectInfo
        projectTitle="Sintex"
        authorName="Lennydevx"
        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
        Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
        bibendum massa, sit amet porttitor orci lectus et magna. Ut et magna ac
        massa malesuada porta. Nam id tincidunt lacus. Donec malesuada, dui congue
        hendrerit fringilla, metus diam luctus lorem, ut condimentum ligula est fdfsdgsdgsd"
        taskManagerLink="#"
        githubRepoLink="#"
        documentationLink="#"
        users={demoUsers}
      />
    </div>
  );
};

export default project;