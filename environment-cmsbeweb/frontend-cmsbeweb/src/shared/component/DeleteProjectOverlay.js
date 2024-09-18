import React, { useState } from 'react';
import './DeleteProjectOverlay.css';
import PropTypes from 'prop-types';

export default function DeleteProjectOverlay(props) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vérifier le mot de passe
        if (password === props.password) {
            // Mot de passe correct, supprimer le projet
            props.onDeleteProject(props.projectId);
            // Fermer l'overlay
            props.setShowDeleteProjectOverlay(false);
        } else {
            // Mot de passe incorrect, afficher un message d'erreur
            setError('Mot de passe incorrect');
        }
    };

    return (
        <div className={`delete-project-overlay ${props.isDarkMode ? 'dark' : ''}`}>
            <h3>Etes-vous sûr de vouloir supprimer le projet ?</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div id="deleteprojectbuttons">
                    <button type="button" onClick={() => props.setShowDeleteProjectOverlay(false)}>
                        Retour
                    </button>
                    <button type="submit">Valider</button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

DeleteProjectOverlay.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    setShowDeleteProjectOverlay: PropTypes.func.isRequired,
    onDeleteProject: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};
