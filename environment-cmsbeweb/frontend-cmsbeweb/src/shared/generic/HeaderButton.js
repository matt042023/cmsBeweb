import React from 'react';
import './HeaderButton.css';
import PropTypes from 'prop-types';

/**
 * @description                                     The buttons that are displayed in the header navbar
 * 
 * @param {object}  props 
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false
 * @param {string}  icon        props.icon          The reference of the icon from the Boostrap library (example : bi-screwdriver)
 * @param {string}  text        props.text          The text that is displayed on the button
 * @param {string}  redirect    props.redirect      The url link that the button redirects to
 * @returns                                         Button component 
 */

function HeaderButton(props){
    
    const redirect = () => {
        window.location.href = props.redirect;
    };

    return ( 
        <button
            className={`HeaderButton ${props.isDarkMode ? 'darkMode' : ''}`}
            onClick={redirect}
            aria-label={props.text}
        >
            <i className={props.icon} aria-hidden="true"></i>
            <label>{props.text}</label>
        </button>
    );
}

HeaderButton.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    icon: PropTypes.string.isRequired, // icon prop is required and should be a string
    text: PropTypes.string.isRequired, // text prop is required and should be a string
    redirect: PropTypes.string.isRequired // redirect prop is required and should be a string
  };

export default HeaderButton ;