import React, { useState, useEffect } from 'react';
import './CreatePageOverlay.css';
import PropTypes from 'prop-types';

function CreatePageOverlay(props) {
  const [formData, setFormData] = useState({
    pag_name: '',
    pag_parent: null, // Null car la page n'a pas de parent par défaut
    fk_prj_id: 1 // ID du projet passé en dur pour le moment
  });

  const [pagesList, setPagesList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:12000/pages") 
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Ajout pour afficher la structure de données renvoyée par l'API
        setPagesList(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vérifie que le nom de la page est défini dans formData
    if (!formData.pag_name) {
      console.error('Le nom de la page est requis.');
      return;
    }
    
    console.log('Données du formulaire avant envoi:', formData); // Ajout du console.log
    
    fetch(`http://localhost:12000/pages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Page créée avec succès:', data);
        // Réinitialiser le formulaire après la soumission réussie
        setFormData({ pag_name: '', pag_parent: null, fk_prj_id: 1 }); // Remise à zéro des valeurs après la création
        // Fermer l'overlay après la soumission réussie
        props.setShowCreatePageOverlay(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la création de la page:', error);
        // Ajoutez ici toute logique pour gérer les erreurs lors de la création de la page
      });
  };

  return (
    <div className="createpageoverlay" id={props.isDarkMode === true ? 'darkcreatepageoverlay' : ''}>
      <h3>Créer une nouvelle page</h3>
      <form onSubmit={handleSubmit}>
        <div id="inputs-row-page">
          <div className="input-data">
            <label htmlFor='pag_name'>Nom de la page</label><br />
            <input name='pag_name' type="text" placeholder='My_Page' required value={formData.pag_name} onChange={handleChange} />
          </div>
          <div className="input-data">
            <label htmlFor='pag_parent'>Page parente</label><br />
            <select name="pag_parent" id="pag_parent" value={formData.pag_parent} onChange={handleChange}>
              <option value="">Aucune</option>
              {Array.isArray(pagesList) && pagesList.map((page) => (
                <option key={page.pag_id} value={page.pag_id}>{page.pag_name}</option>
              ))}
            </select>
          </div>
        </div>
        <div id="modifymediabuttons">
          <button onClick={() => props.setShowCreatePageOverlay(false)}>Retour</button>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
}

CreatePageOverlay.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setShowCreatePageOverlay: PropTypes.func.isRequired
};

export default CreatePageOverlay;

