import React from 'react';
import './Header.css';
import Logo from '../generic/Logo';
import SearchBar from '../generic/SearchBar.js';
import UserSettings from '../generic/UserSettings';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

/**
 * @description                                     The header that is displayed as the header navbar
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * 
 * @returns                                         The header component
 */

function Header(props) {
    const placeHolder = "Rechercher un projet";
    const location = useLocation();
    const pages = [
        { url: '/homepage', label: `Page d'accueil Admin`},
        { url: '/dashboard', label: 'Dashboard projet' },
        { url: '/createPage', label: 'Création de page' },
        { url: '/mediasList', label: 'Liste des médias' },
        { url: '/pagesList', label: 'Liste des pages' },
        { url: '/preview', label: 'Previsualisation du site' }
    ];

    const getPageName = () => {
        const currentPage = pages.find(page => page.url === location.pathname);
        return currentPage ? currentPage.label : 'Nom de la page';
    };

    return (
        <div className='Header' data-isDarkMode={props.isDarkMode}>
            <div className='headerBody'>
                <Logo isDarkMode={props.isDarkMode} />
                <p className='titleText'> {getPageName() || 'Nom de la page'} </p>
                <SearchBar customWidth='22.5rem' isDarkMode={props.isDarkMode} placeholder={placeHolder}/>
                <UserSettings isdarkmode={props.isDarkMode} setDarkMode={props.setDarkMode} />
            </div>
        </div>
    )
}

Header.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired 
};

export default Header;
