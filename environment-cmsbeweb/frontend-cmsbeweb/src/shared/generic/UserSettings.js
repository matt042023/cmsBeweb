import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './UserSettings.css';
import ThemeButton from './ThemeButton';
import Logout from '../Logout';

function UserSettings(props) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [username] = useState(localStorage.getItem('username') || ''); 
    const overlayRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                // Clic en dehors de l'overlay, donc on ferme l'overlay
                setShowOverlay(false);
            }
        }

        // Ajoute l'écouteur d'événement pour détecter les clics en dehors de l'overlay
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Retire l'écouteur d'événement lorsque le composant est démonté
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleShowOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <div className="avatar" id={props.isdarkmode ? 'dark' : ''}>
            <span onClick={handleShowOverlay}>
                {username ? username.slice(0, 2).toUpperCase() : 'UN'}
            </span>
            {showOverlay && (
                <div ref={overlayRef} className={`overlay ${props.isdarkmode ? 'dark' : ''}`}>
                    <h2>{username}</h2>
                    <div className='subdiv'>
                        <label htmlFor="themebutton">Changer le thème</label>
                        <ThemeButton isdarkmode={props.isdarkmode} setDarkMode={props.setDarkMode} id="themebutton" />
                    </div>
                    <div className='subdiv' onClick={Logout}>
                        <p>Déconnexion</p>
                    </div>
                </div>
            )}
        </div>
    );
}

UserSettings.propTypes = {
    isdarkmode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
};

export default UserSettings;

