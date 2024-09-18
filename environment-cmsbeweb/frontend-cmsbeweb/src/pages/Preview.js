import React, { useState, useEffect } from 'react';
import './Preview.css';
import SidebarLeftNavigation from '../shared/component/SidebarLeftNavigation';
import PropTypes from 'prop-types';

function Preview(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Effectue la requête GET lors du chargement initial du composant
    fetch('http://localhost:12000/users/1')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []); // Le tableau vide en tant que deuxième argument signifie que l'effet ne s'exécutera qu'une seule fois après le premier rendu

  const pages = [
    { url: '/', label: 'Dashboard projet' },
    { url: '/createPage', label: 'Création de page' },
    // { url: '/mediasList', label: 'Liste des médias' },
    { url: '/pagesList', label: 'Liste des pages' },
    { url: '/preview', label: 'Preview' }
  ];

  return (
    <div className="Prevdiv"> 
      <SidebarLeftNavigation className="Sidebar" isDarkMode={props.isDarkMode} items={pages}/>
      <div className="MainContent">
   {userData && (
  <div>
      <h1 className='projectName'>Nom projet: {userData.usr_username || 'N/A'}</h1>
  </div> 
)} 
        <div className='prevProject'>
       <div>
      <div className="preview-container">
        <iframe
          src="https://fondespierre.com/nos-poles-de-competences/beweb-ecole-numerique/"
          title="Prévisualisation de votre site"
          width="100%"
          height="600rem"
        />
      </div>
    </div>
  

        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  isDarkMode: PropTypes.bool.isRequired // isDarkMode prop is required and should be a boolean
};
export default Preview;
