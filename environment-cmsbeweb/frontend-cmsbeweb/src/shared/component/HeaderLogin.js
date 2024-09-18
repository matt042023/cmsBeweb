import React from 'react';
import './HeaderLogin.css';
import Logo from '../generic/Logo';
import PropTypes from 'prop-types';

/**
 * The header that is displayed as the header navbar
 * 
 * @param {object}  props
 * @param {boolean} props.isDarkMode  Either true or false 
 * 
 * @returns The header component
 */
function HeaderLogin(props) {
    return (
        <div className={`Header ${props.isDarkMode ? 'dark' : 'light'}`}>
            <div className='headerBody'>
                <Logo isDarkMode={props.isDarkMode} />
            </div>
        </div>
    )
}

HeaderLogin.propTypes = {
    isDarkMode: PropTypes.bool.isRequired // isDarkMode prop is required and should be a boolean
};

export default HeaderLogin;
