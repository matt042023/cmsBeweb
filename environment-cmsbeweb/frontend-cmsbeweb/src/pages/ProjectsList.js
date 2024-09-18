import React, { useState, useEffect } from 'react';
import './ProjectsList.css';
import SearchBar from '../shared/generic/SearchBar';
import AddButton from '../shared/component/AddButton';
import ContainerCustom from '../shared/generic/ContainerCustom';
import Overlay from '../shared/component/Overlay'
import ListProject from '../shared/component/ListProject';
import DeleteProjectOverlay from '../shared/component/DeleteProjectOverlay'

function ProjectsList(props) {
  const [projectsList, setProjectsList] = useState([]);
  const [showdeleteprojectoverlay, setShowDeleteProjectOverlay] = useState(false);


  useEffect(() => {
    fetch("http://localhost:12000/projects")
      .then((res) => res.json())
      .then(async (data) => {
        const projectsWithData = await Promise.all(data.data.map(async (project) => {
          return { ...project };
        }));
        setProjectsList(projectsWithData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='projectslist' id={props.isDarkMode === true ? 'projetlistdark' : ''}>
      <div id='contentprojectslist'>
        <div id ='searchaddprojectslist'>  
          <SearchBar isDarkMode={props.isDarkMode} placeholder='Rechercher un projet'></SearchBar>
          <AddButton
            show={''}
            text='Ajouter'
            id='addbuttonprojectslist'>
          </AddButton>
        </div>
        <div id='contentprojectslistitems'>
          <ContainerCustom isDarkMode={props.isDarkMode} >
            <ListProject
              isDarkMode={props.isDarkMode}
              listHeaders={['N°','Projet', 'Derniere modification', 'Status']}
              listRows={projectsList.map((project) => [
                project.prj_id,
                project.prj_name,
                project.updatedAt,
                project.prj_prod ? 'Actif' : 'Inactif'
              ])}
              deleteButton={setShowDeleteProjectOverlay}  
              modifyButton = {''}
            />
          </ContainerCustom>
          {showdeleteprojectoverlay && 
           <Overlay 
           component={
              <DeleteProjectOverlay 
                  isDarkMode={props.isDarkMode}
                  setShowDeleteProjectOverlay={setShowDeleteProjectOverlay}
              />}
           />
            }
        </div>   
      </div>
    </div>
  );
}

export default ProjectsList;