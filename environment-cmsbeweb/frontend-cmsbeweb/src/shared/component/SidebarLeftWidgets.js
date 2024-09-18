import React, { useState } from 'react';
import './SidebarLeftWidgets.css';
import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SearchBar from '../generic/SearchBar.js';

const SidebarLeftWidgets = ({ isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [contentDisplay, setContentDisplay] = useState('');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setContentDisplay(isOpen ? 'classClose' : '');
    };

    return (
        <div className={`sidebar-left ${contentDisplay} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`search-widgets-container ${contentDisplay}`}>
                <SearchBar className={`search-widgets ${contentDisplay}`} isDarkMode={isDarkMode} customWidth="15rem"/>
            </div>
            <div className={`button-container ${contentDisplay}`}>
                <button className={`toggle-btn ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleSidebar}>
                    {isOpen ? <BsArrowLeft /> : <BsArrowRight />}
                </button>
            </div>
        </div>
    );
};

SidebarLeftWidgets.propTypes = {
    isDarkMode: PropTypes.bool.isRequired
};

export default SidebarLeftWidgets;
