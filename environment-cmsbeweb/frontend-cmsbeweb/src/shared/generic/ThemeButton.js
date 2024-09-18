import React from "react";
import './ThemeButton.css'
import getDarkModeFromLocalStorage from '../getDarkModeFromLocalStorage'
import PropTypes from 'prop-types';

/**
 * @description                     Theme Button for changing To Light/Dark Mode 
 * 
 * @param {object} props
 * @param {boolean} isdarkmode      props.isDarkMode either 'true' or 'false'
 * @param {function} setDarkMode    props.setDarkMode UseState in parent element
 * 
 * @returns                         JSX elements (ThemeButton)
 */

function ThemeButton(props) {
	function toggleMode() {
		localStorage.setItem("isdarkmode", !getDarkModeFromLocalStorage());
        props.setDarkMode(getDarkModeFromLocalStorage());
	} // Inverts boolean in localStorage, then updates state in app.jss

	return (
        <label className='toggle-switch' htmlFor='darkModeToggle'>
        <input 
            id='darkModeToggle'
            type='checkbox' 
            checked={props.isdarkmode} 
            onChange={toggleMode}
        />
        <span className='slider'></span>
    </label>
	);
}

ThemeButton.propTypes = {
    isdarkmode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
};

export default ThemeButton;