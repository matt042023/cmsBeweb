import React, { useState } from 'react';
import './CreateClientOverlay.css';
import PropTypes from 'prop-types';

/**
 * @description                                     Overlay Content (fits in Overlay component)
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {function} setShowCreateClientOverlay  props.setShowCreateUserOverlay    Returns a boolean to display the overlay
 * 
 * @returns                                         Create User Content
 */

function CreateClientOverlay(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!username || !password) {
      alert('Veuillez fournir un nom d\'utilisateur et un mot de passe.');
      return;
    }
    
    try {
      const newUser = {
        usr_username: username,
        usr_password: password,
        fk_rol_id: 2 // L'ID du rôle client
      };

      const response = await fetch('http://localhost:12000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Vous pouvez également ajouter des en-têtes d'authentification si nécessaire
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        console.log('Utilisateur créé avec succès!');
        setUsername('');
        setPassword('');
        props.setShowCreateClientOverlay(false);
      } else {
        alert('Erreur lors de la création de l\'utilisateur.');
        console.error('Erreur lors de la création de l\'utilisateur :', response.statusText);
      }
    } catch (error) {
      alert('Erreur lors de la création de l\'utilisateur.');
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    }
  };

  return (
    <div className="createclientoverlay" id={props.isDarkMode === true ? 'dark' : ''}>
      <h3>Ajouter un nouveau client</h3>
      <form onSubmit={handleSubmit}> {/* Envelopper le formulaire dans une balise <form> */}
        <div id="inputs-row">
          <div className="input-data">
            <label htmlFor='username'>Nom d'utilisateur</label><br />
            <input
              name='username'
              type="text"
              placeholder='User_1'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-data">
            <label htmlFor='password'>Mot de passe</label><br />
            <input
              type="password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div id="createclientbuttons">
          <button onClick={() => props.setShowCreateClientOverlay(false)}>Retour</button>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
}

CreateClientOverlay.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    setShowCreateClientOverlay: PropTypes.func.isRequired // setShowCreateClientOverlay prop is required and should be a function
  };
 
export default CreateClientOverlay;
