import React, { useState, useEffect } from 'react';
import ContainerCustom from '../shared/generic/ContainerCustom';
import PageCard from '../shared/component/PageCard';
import SidebarLeftNavigation from '../shared/component/SidebarLeftNavigation';
import SearchBar from '../shared/generic/SearchBar';
import './PagesList.css';
import Overlay from '../shared/component/Overlay';
import CreatePageOverlay from '../shared/component/CreatePageOverlay';
import AddButton from '../shared/component/AddButton';
import PropTypes from 'prop-types';

function PagesList({ isDarkMode }) {
  const [showCreatePageOverlay, setShowCreatePageOverlay] = useState(false);
  const [pagesList, setPagesList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:12000/pages")
      .then((res) => res.json())
      .then((res) => {
        // Vérifie si la réponse est un objet avec une propriété 'success' égale à true et une propriété 'data' qui est un tableau
        if (res.success && Array.isArray(res.data)) {
          // Extraire les données de chaque objet Page
          setPagesList(res.data);
        } else {
          console.error("Pages list is not an array:", res);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='pagelist' id={isDarkMode ? 'pageslistdark' : ''}>
      <SidebarLeftNavigation isDarkMode={isDarkMode} items={[
        { url: '/dashboard', label: 'Dashboard projet' },
        { url: '/createPage', label: 'Création de page' },
        // { url: '/mediasList', label: 'Liste des médias' },
        { url: '/pagesList', label: 'Liste des pages' },
        { url: '/preview', label: 'Preview' }
      ]} />
      <div id='contentpagelistitems'>
        <div>
          <SearchBar customWidth='22.5rem' isDarkMode={isDarkMode} placeholder='Rechercher une page' />
          <AddButton
            show={setShowCreatePageOverlay}
            text='Ajouter '
            id='addbuttonpagelist'
          />
        </div>
        <div>
          <ContainerCustom
            isDarkMode={isDarkMode}
          >
            {pagesList.map((page) => (
              // Vérifie si la page existe avant d'accéder à ses propriétés
              page && (
                <PageCard
                  key={page.pag_id}
                  id={`page${page.pag_id}`}
                  pageName={page.pag_name}
                  isDarkMode={isDarkMode}
                />
              )
            ))}
          </ContainerCustom>
        </div>
      </div>
      {showCreatePageOverlay &&
        <Overlay
          component={
            <CreatePageOverlay
              isDarkMode={isDarkMode}
              setShowCreatePageOverlay={setShowCreatePageOverlay}
              pagesList={pagesList}
          />}
        />
      }
    </div>
  );
}

PagesList.propTypes = {
  isDarkMode: PropTypes.bool.isRequired // isDarkMode prop is required and should be a boolean
};

export default PagesList;